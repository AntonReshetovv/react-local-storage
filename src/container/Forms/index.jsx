import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

const Forms = () => {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')

  const buttonValue = () => {
    const formDetails = {
      'Name' : name,
      'Phone' : phone,
      'Email' : email
    }
    console.log (formDetails)
  }
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="input"
          onChange={e => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          className="input"
          onChange={e => setPhone(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="input"
          onChange={e => setEmail(e.target.value)}
        />
      </form>
      <form>
        <Link to="/page2">
          <Button variant="contained" color="primary" className="button" onClick={buttonValue}>
            Edit Button
          </Button>
        </Link>
        <Link to="/page3">
          <Button variant="contained" color="secondary" className="button">
            Favourite Button
          </Button>
        </Link>
      </form>
    </div>
  )
}

export default Forms
