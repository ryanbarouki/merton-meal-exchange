import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ClaimModal } from './ClaimModal';

export const MealListing = ({items, onClaim}) => {

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
          {items && items.length > 0 && items.map((row, index) => (
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
              <TableCell align="left">{row.claimed ??
                <ClaimModal onSubmit={onClaim} index={index}>Claim</ClaimModal>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
