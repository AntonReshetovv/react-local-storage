import React from "react";
import { Switch, Route } from "react-router-dom";
import AddContact from "../../Pages/AddContact";
import Main from "../../Pages/Main";
import ChangeContact from "../../Pages/ChangeContact";
import FavoriteContacts from "../../Pages/FavoriteContacts";

const Switcher = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/addContact">
        <AddContact />
      </Route>
      <Route path="/changeContact">
        <ChangeContact />
      </Route>
      <Route path="/favoriteContacts">
        <FavoriteContacts />
      </Route>
    </Switch>
  );
};

export default Switcher;
