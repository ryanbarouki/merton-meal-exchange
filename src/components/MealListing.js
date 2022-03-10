import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(mealType, date, dietary, contact, claimed) {
  return { mealType, date, dietary, contact, claimed };
}

const rows = [
  createData('Early Supper', 'Monday 7th March', 'Vegetarian, Fruit Plate', '07753255825', 'Ryan Barouki'),
  createData('Early Supper', 'Tuesday 8th March', 'Vegetarian, Fruit Plate', '07753255825', false),
];

export const MealListing = ({items}) => {
  console.log(items);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Meal Type</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Dietary Type</TableCell>
            <TableCell align="left">Contact</TableCell>
            <TableCell align="left">Claimed By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items && items.length > 0 && items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.mealType}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.dietary}</TableCell>
              <TableCell align="left">{row.contact}</TableCell>
              <TableCell align="left">{row.claimed ?
                row.claimed :
                <Button>Claim</Button>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
