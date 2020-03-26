import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

const ContactForm = props => {
  //Пояснение: Есть переменная, которая принимает значение, props.user,
  //когда форма заполненная, или переменная принимает значение объекта , 
  //с ее свойствами и пустыми значениями свойства.
  const initValue = props.user || { name: "", phone: "", email: "",isFav: false }
  // Пояснение:Есть сам стейт, которое принимает как изначальное состояние,
  // переменную initValue.
  const [user, setUser] = React.useState(initValue);
  //Пояснение: Функция updateKey(key,event) принимает параметры ключ и событие
  //эта функция изменяет стейт объекта user, при вводе в поля формы какое либо value,
  //название поля является key, и при изменение поля, происходит событие
  //которое изменияет значение поля
  function updateKey(key, event) {
    setUser({
      ...user,
      [key]: event.target.value
    });
  }

  function onSubmit() {
    props.onSubmit(user);
  }
  //Пояснение: атрибут value, присваивает свойство объекта.
  // onChange событие, принимает функцию, которая вызывает key объекта user и событие
  return (
    <form>
      <TextField
        id="standard-basic"
        label="Name"
        className="input"
        value={user.name}
        onChange={e => updateKey("name", e)}
      />
      <TextField
        id="standard-basic"
        label="Phone"
        className="input"
        value={user.phone}
        onChange={e => updateKey("phone", e)}
      />
      <TextField
        id="standard-basic"
        label="Email"
        className="input"
        value={user.email}
        onChange={e => updateKey("email", e)}
      />
      <Link to="/" className="link">
        <Button variant="contained" className="button" onClick={onSubmit}>
          {props.user ? "Обновить" : "Добавить"}
        </Button>
      </Link>
    </form>
  );
};
//у кнопки, есть событие  onClick, которая присваивает себе функцию onSubmit, а эта
// функция, принимает пропсы со страничке AddContact в виде функции , которая
// добавляет в localStorage или получает из localStorage объект user

export default ContactForm;
