import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";
import ContactTable from "../ContactTable";

const CreateContactForm = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <form>
      <TextField id="standard-basic" label="Name" className="input" />
      <TextField id="standard-basic" label="Phone" className="input" />
      <TextField id="standard-basic" label="Email" className="input" />
      <Button
        variant="contained"
        className="button"
        onClick={() => setToggle(!toggle)}
      >
        Добавить
      </Button>
      {toggle && <ContactTable />}
    </form>
  );
};

export default CreateContactForm;
