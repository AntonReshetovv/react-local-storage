import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Pages/Layout";
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

