import React from "react";
import AddContact from "./Pages/AddContact";
import Contacts from "./Pages/Contacts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChangeContact from "./Pages/ChangeContact/index";
import FavoriteContacts from "./Pages/FavoriteContacts";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <AddContact />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/changeContact">
        <ChangeContact />
      </Route>
      <Route path="/favoriteContacts">
        <FavoriteContacts />
      </Route>
    </Router>
  );
}

export default App;
