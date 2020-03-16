import React from "react";
import Container from "@material-ui/core/Container";
import ContactForm from "../../Container/ContactForm";
import "./style.css";

const AddContact = () => {
  return (
    <Container maxWidth="sm">
      <h2>Создание контакта</h2>
      <ContactForm isContactNew={true}/>
    </Container>
  );
};

export default AddContact;
