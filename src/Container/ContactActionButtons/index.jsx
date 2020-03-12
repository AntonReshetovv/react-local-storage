import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";

const ContactActionButtons = () => {
  return (
    <div className="buttons">
      <Button variant="contained" color="primary" className="edit">
        Изменить
      </Button>
      <Button variant="contained" color="secondary" className="favorite">
        Добавить в избранное
      </Button>
    </div>
  );
};

export default ContactActionButtons;
