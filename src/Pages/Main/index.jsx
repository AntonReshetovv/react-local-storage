import React from "react";
import Container from "@material-ui/core/Container";
import "./style.css";
import ContactTable from "../../Container/ContactTable";

const Main = () => {
  return (
    <Container maxWidth="sm">
      <ContactTable />
    </Container>
  );
};

export default Main;
