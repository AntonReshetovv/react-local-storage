import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { Link } from "react-router-dom";

const ContactActionButtons = () => {
  return (
    <div className="actionButtons">
      <Link to="/changeContact" className="link">
        <Button variant="contained" color="primary" className="edit">
          Изменить
        </Button>
      </Link>
      <Button variant="contained" color="secondary" className="favorite">
        Добавить в избранное
      </Button>
    </div>
  );
};

export default ContactActionButtons;
