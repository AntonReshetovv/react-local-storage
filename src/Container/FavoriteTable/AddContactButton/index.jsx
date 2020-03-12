import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { Link } from "react-router-dom";

const AddContactButton = () => {
  return (
    <div className="button">
      <Link to="/addContact" className="addContact">
        <Button variant="contained" color="primary">
          Добавить контакт
        </Button>
      </Link>
    </div>
  );
};

export default AddContactButton;
