import React from "react";
import { Switch, Route } from "react-router-dom";
import AddContact from "../../Pages/AddContact/index";
import Main from "../../Pages/Main/index";
import ChangeContact from "../../Pages/ChangeContact/index";
import FavoriteContacts from "../../Pages/FavoriteContacts/index";

const SwitchContainer = () => {
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

export default SwitchContainer;
