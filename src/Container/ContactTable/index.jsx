import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Buttons from "../../Component/Button";
import Container from "@material-ui/core/Container";
import "./style.css";

function createData(name, phone, email) {
  return { name, phone, email };
}

const rows = [
  createData("Kris", 89345, "Google"),
  createData("Den", 3245, "Rambler"),
  createData("Bill", 56423, "Yandex")
];

const ContactTable = () => {
  return (
    <Container maxWidth="sm">
      <h1>Контакты</h1>
      <TableContainer>
        <Table className="table" aria-label="simple table">
          <TableHead>
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
                  <Buttons />
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ContactTable;
