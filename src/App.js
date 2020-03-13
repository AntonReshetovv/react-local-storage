import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Container/Layout";
import Switcher from "./Container/Switcher";

function App() {
  return (
    <Router>
      <Layout>
        <Switcher />
      </Layout>
    </Router>
  );
}

export default App;
