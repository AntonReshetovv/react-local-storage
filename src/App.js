import React from "react"
import "./App.css"
import Forms from "./container/Forms"
import Button from "@material-ui/core/Button"

function App() {
  return (
    <div className="App">
      <h3>Task</h3>
      <Button variant="contained" className="button">
        Default
      </Button>
      <Forms />
    </div>
  )
}

export default App
