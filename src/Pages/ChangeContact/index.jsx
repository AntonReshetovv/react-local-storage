import React from "react";
import ContactForm from "../../Container/ContactForm";
import Container from "@material-ui/core/Container";
import {
  useParams
} from "react-router-dom";

const ChangeContact = () => {
  let { user_id } = useParams();
  const users = JSON.parse(window.localStorage.getItem('users'));
  const user = users.find((user) => user.id === +user_id);

  function updateUserInLocalStorage(updatedUser) {
  
  }

  return (
    <Container maxWidth="sm">
      <h2>Обновление контакта {user_id}</h2>
      <ContactForm user={user} onSubmit={updateUserInLocalStorage}/>
    </Container>
  );
};

export default ChangeContact;
