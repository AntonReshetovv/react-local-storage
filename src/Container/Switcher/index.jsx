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
      <Route path="/add">
        <AddContact />
      </Route>
      <Route path="/edit/:id">
        <ChangeContact />
      </Route>
      <Route path="/favorites">
        <FavoriteContacts />
      </Route>
    </Switch>
  );
};

export default Switcher;
