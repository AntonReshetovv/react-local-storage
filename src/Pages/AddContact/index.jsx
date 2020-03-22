import React from "react";
import Container from "@material-ui/core/Container";
import ContactForm from "../../Container/ContactForm";
import {useLocalStorage} from "../../LocalStorageHooks";
import "./style.css";

const AddContact = () => {
  const [name, setName] = useLocalStorage("name","");
  const [phone, setPhone] = useLocalStorage("phone","");
  const [email, setEmail] = useLocalStorage("email","");

  return (
    <Container maxWidth="sm">
      <h2>Создание контакта</h2>
      <ContactForm
        isContactNew={true}
        setName={e => setName(e.target.value)}
        setPhone={e => setPhone(e.target.value)}
        setEmail={e => setEmail(e.target.value)}
        name={name}
        phone={phone}
        email={email}
        click={()=>console.log('click')}
      />
    </Container>
  );
};

export default AddContact;
