import React from "react";
import ContactForm from "../../Container/ContactForm";
import Container from "@material-ui/core/Container";

const ChangeContact = () => {
  return (
    <Container maxWidth="sm">
      <h2>Обновление контакта</h2>
      <ContactForm isContactNew={false}/>
    </Container>
  );
};

export default ChangeContact;
