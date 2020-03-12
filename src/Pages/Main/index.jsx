import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import "./style.css";
import ContactTable from "../../Container/ContactTable";

const Main = () => {
  return (
    <Container maxWidth="sm">
      <h1>Главная страница</h1>
      <Link to="/favoriteContacts">Избранное</Link>
      <Link to="/addContact">Добавить контакт</Link>
      <ContactTable />
    </Container>
  );
};

export default Main;
