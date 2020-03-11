import React from "react";
import Button from "@material-ui/core/Button";

const Buttons = () => {
  return (
    <div className="buttons">
      <Button variant="contained" color="primary" className="editBut">
        Изменить
      </Button>
      <Button variant="contained" color="secondary" className="favBut">
        Добавить в избранное
      </Button>
    </div>
  );
};

export default Buttons;
