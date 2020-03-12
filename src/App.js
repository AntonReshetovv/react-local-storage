import React from "react";
import AddContact from "./Pages/AddContact";
import Contacts from "./Pages/Contacts";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <AddContact />
      </Route>
      <Route path="/users">
        <Contacts />
      </Route>
    </Router>
  );
}

export default App;
