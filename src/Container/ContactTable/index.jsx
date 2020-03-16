import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ContactActionButtons from "./ContactActionButtons/index";
import Container from "@material-ui/core/Container";
import "./style.css";

const ContactTable = (props) => {
  return (
    <Container maxWidth="sm">
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
            {props.contacts.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                  <ContactActionButtons />
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
