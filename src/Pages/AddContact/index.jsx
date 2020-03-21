import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import ContactForm from "../../Container/ContactForm";
import "./style.css";

const AddContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container maxWidth="sm">
      <h2>Создание контакта</h2>
      <ContactForm
        isContactNew={true}
        setName={e => setName(e.target.value)}
        setPhone={e => setPhone(e.target.value)}
        setEmail={e => setEmail(e.target.value)}
        name={name}
        phone={phone}
        email={email}
        click = {()=>console.log('я кликнул')}
      />
    </Container>
  );
};

export default AddContact;
