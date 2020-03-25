import React from "react";
import Container from "@material-ui/core/Container";
import ContactForm from "../../Container/ContactForm";
import "./style.css";

const AddContact = (props) => {

  function saveInStorage(user) {
    const users = JSON.parse(window.localStorage.getItem('users'));
    users.push({
      id: Math.floor(Math.random() * 10000),
      ...user
    });
    window.localStorage.setItem('users', JSON.stringify(users))
  }
  return (
    <Container maxWidth="sm">
      <h2>Создание контакта</h2>
      <ContactForm
        // user={{name: 134, phone: 41234, email: '41234234'}}
        onSubmit={saveInStorage}
      />
    </Container>
  );
};

export default AddContact;
