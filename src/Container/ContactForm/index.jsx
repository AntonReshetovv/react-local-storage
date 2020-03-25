import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

const ContactForm = props => {

  const initValue = props.user || { name: "", phone: "", email: "" }

  const [user, setUser] = React.useState(initValue);
  function updateKey(key, event) {
    setUser({
      name: user.name,
      phone: user.phone,
      email: user.email,
      [key]: event.target.value
    });
  }

  function onSubmit() {
    props.onSubmit(user);
  }

  return (
    <form>
      <TextField
        id="standard-basic"
        label="Name"
        className="input"
        value={user.name}
        onChange={e => updateKey("name", e)}
      />
      <TextField
        id="standard-basic"
        label="Phone"
        className="input"
        value={user.phone}
        onChange={e => updateKey("phone", e)}
      />
      <TextField
        id="standard-basic"
        label="Email"
        className="input"
        value={user.email}
        onChange={e => updateKey("email", e)}
      />
      <Link to="/" className="link">
        <Button variant="contained" className="button" onClick={onSubmit}>
          {props.user ? "Обновить" : "Добавить"}
        </Button>
      </Link>
    </form>
  );
};

export default ContactForm;
