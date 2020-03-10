import React, { useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

const Forms = () => {

  const initUser = JSON.parse(localStorage.getItem('user'))

  const [user, setUser] = React.useState(initUser || {name: '', phone: '', email: ''})

  useEffect(function updateUser() {
    localStorage.setItem("user", JSON.stringify(user))
  })

  const buttonValue = () => {
    console.log(user)
  }
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="input"
          value={user.name}
          onChange={e => setUser({...user, name: e.target.value})}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          className="input"
          value={user.phone}
          onChange={e => setUser({...user, phone: e.target.value})}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="input"
          value={user.email}
          onChange={e => setUser({...user, email: e.target.value})}
        />
      </form>
      <form>
        <Link to="/page2">
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={buttonValue}
          >
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
