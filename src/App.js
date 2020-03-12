import React from "react";
import AddContact from "./Pages/AddContact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChangeContact from "./Pages/ChangeContact/index";
import FavoriteContacts from "./Pages/FavoriteContacts";
import Main from "./Pages/Main";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
