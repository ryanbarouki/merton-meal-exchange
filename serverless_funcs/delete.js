// src/customers/delete.js
require('dotenv').config();

/* Import faunaDB sdk */
const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = async (event, context) => {
  const id = JSON.parse(event.body).id;
  console.log(event)
  console.log(`Function 'delete' invoked. delete id: ${id}`);
  return client
    .query(q.Delete(q.Select(0, q.Paginate(q.Match(q.Index('items_by_id'), id)))))
    .then(response => {
      console.log('success', response);
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      };
    })
    .catch(error => {
      console.log('error', error);
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};