import React from "react";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon'
import "./style.css";
//import { Link } from "react-router-dom";

const ContactActionButtons = (props) => {
  return (
    <span>
      <Button
        variant="contained"
        color="primary"
        className="edit"
        onClick={props.onUpdate}
      >
        <Icon>edit</Icon>
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className="favorite"
        onClick={props.onFavorite}
      >
        <Icon>favorite</Icon>
      </Button>
    </span>
  );
};

export default ContactActionButtons;
