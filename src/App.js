import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Container/Layout";
import SwitchContainer from "./Container/Switch";

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
