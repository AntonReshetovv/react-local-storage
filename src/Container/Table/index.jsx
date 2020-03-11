import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Buttons from "../../Component/Button";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      marginTop: 30
    },
  });

function createData(name, phone, email) {
    return { name, phone, email};
  }

  const rows = [
    createData('Kris', 89345, 'Google'),
    createData('Den', 3245, 'Rambler'),
    createData('Bill', 56423, 'Yandex')
  ];

const Tabl = () =>{
    const classes = useStyles();
    return(
        <div>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Buttons />
    </div>
    )
}

export default Tabl



