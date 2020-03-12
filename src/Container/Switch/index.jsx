import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactTable from "../../Container/ContactTable/index";
import CreateContactForm from "../../Container/CreateContactForm/index";
import ChangeContactForm from "../../Container/ChangeContactForm/index";
import FavoriteTable from "../../Container/FavoriteTable/index";

const SwitchContainer = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ContactTable />
      </Route>
      <Route path="/addContact">
        <CreateContactForm />
      </Route>
      <Route path="/changeContact">
        <ChangeContactForm />
      </Route>
      <Route path="/favoriteContacts">
        <FavoriteTable />
      </Route>
    </Switch>
  );
};

export default SwitchContainer;
