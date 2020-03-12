import React from "react";
import CreateContactForm from "../../Container/CreateContactForm";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./style.css";

const AddContact = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Container maxWidth="sm">
      <h1>Добавить контакт</h1>
      <div className="button"> 
        <Button
          variant="contained"
          className="button"
          onClick={() => setToggle(!toggle)}
        >
          Добавить контакт
        </Button>
      </div>
      {toggle && <CreateContactForm />}
    </Container>
  );
};

export default AddContact;
