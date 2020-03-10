import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
const Page2 = () => {
  return (
    <div>
      <h3>Для редактирования контактов и сохранение их</h3>
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
          Save
        </Button>
      </form>
    </div>
  )
}
export default Page2
