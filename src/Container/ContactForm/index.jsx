import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

const ContactForm = props => {
  return (
    <form>
      <TextField
        id="standard-basic"
        label="Name"
        className="input"
        value={props.name}
        onChange={props.setName}
      />
      <TextField
        id="standard-basic"
        label="Phone"
        className="input"
        value={props.phone}
        onChange={props.setPhone}
      />
      <TextField
        id="standard-basic"
        label="Email"
        className="input"
        value={props.email}
        onChange={props.setEmail}
      />
      <Link to="/" className="link">
        <Button variant="contained" className="button" onClick={props.click}>
          {props.isContactNew ? "Добавить" : "Обновить"}
        </Button>
      </Link>
    </form>
  );
};

export default ContactForm;
