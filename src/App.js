import React from "react";
//import AddContact from "./Pages/AddContact";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Pages/Layout";
// import ChangeContact from "./Pages/ChangeContact/index";
// import FavoriteContacts from "./Pages/FavoriteContacts";
// import Main from "./Pages/Main";
import SwitchContainer from "./Container/Switch/index"

function App() {
  return (
    <Router>
      <Layout>
        <SwitchContainer />
      </Layout>
    </Router>
  );
}

export default App;

// <Route exact path="/">
//   <Main />
// </Route>
// <Route path="/addContact">
//   <AddContact />
// </Route>
// <Route path="/changeContact">
//   <ChangeContact />
// </Route>
// <Route path="/favoriteContacts">
//   <FavoriteContacts />
// </Route>
