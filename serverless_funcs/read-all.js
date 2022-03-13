require('dotenv').config();

const faunadb = require('faunadb');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

client.query(
  q.CreateIndex({
    name: 'items_by_id',
    source: q.Collection('Meals'),
    terms: [{ field: ['data', 'id'] }],
  })
)
.then((ret) => console.log(ret))
.catch((err) => console.error(
  'Error: [%s] %s: %s',
  err.name,
  err.message,
  err.errors()[0].description,
))

exports.handler = async (event, context) => {
  console.log('Function `read-all` invoked');
  return client
    .query(
    q.Paginate(q.Documents(q.Collection("Meals"))))
    .then(response => {
      const itemRefs = response.data;
      // create new query out of item refs. http://bit.ly/2LG3MLg
      const getAllItemsDataQuery = itemRefs.map(ref => {
        return q.Get(ref);
      });
      // then query the refs.
      return client.query(getAllItemsDataQuery).then(ret => {
        // wellformedData includes customers id in the response.
        const wellformedData = ret.map(malformedResponse => {
          console.log(malformedResponse)
          return {
            ...malformedResponse.data
          };
        });
        return {
          statusCode: 200,
          body: JSON.stringify(wellformedData)
        };
      });
    })
    .catch(error => {
      console.log('error', error);
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};