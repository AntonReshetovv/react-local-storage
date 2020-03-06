import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const Forms = () => {
  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className="input"
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        className="input"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        className="input"
      />
      <Button variant="contained" color="primary" className="button">
        Edit Button
      </Button>
      <Button variant="contained" color="secondary" className="button">
        Favourite Button
      </Button>
    </form>
  )
}

export default Forms
