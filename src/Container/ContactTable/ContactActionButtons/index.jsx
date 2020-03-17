import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
//import { Link } from "react-router-dom";

const ContactActionButtons = (props) => {
  return (
    <div className="actionButtons">
      <Button
        variant="contained"
        color="primary"
        className="edit"
        onClick={props.onUpdate}
      >
        Изменить
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className="favorite"
        onClick={props.onFavorite}
      >
        Добавить в избранное
      </Button>
    </div>
  );
};

export default ContactActionButtons;
