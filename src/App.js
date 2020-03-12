import React from "react";
import AddContact from "./Pages/AddContact";
import Users from "./Pages/Users";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <AddContact />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </Router>
  );
}

export default App;
