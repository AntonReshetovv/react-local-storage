import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

const ChangeContactForm = () => {
  return (
    <div>
      <h1>Изменить контакт</h1>
      <form>
        <TextField id="standard-basic" label="Name" className="input" />
        <TextField id="standard-basic" label="Phone" className="input" />
        <TextField id="standard-basic" label="Email" className="input" />
        <Link to="/" className="link">
          <Button variant="contained" className="button">
            Сохранить
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default ChangeContactForm;
