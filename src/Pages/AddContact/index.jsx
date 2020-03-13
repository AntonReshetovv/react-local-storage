import React from "react";
import Container from "@material-ui/core/Container";
import CreateContactForm from "../../Container/CreateContactForm/index"
import "./style.css";

const AddContact = () => {
  return (
    <Container maxWidth="sm">
      <CreateContactForm />
    </Container>
  );
};

export default AddContact;
