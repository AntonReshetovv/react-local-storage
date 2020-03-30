import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

const ContactForm = props => {
 //Пояснение! Идея формы , это получить данные из State, и отправить их в localStorage

//Эта Магия происходит следующим образом:
// у нас есть state с изначальным значением, эти значения являются либо переданные через 
//пропс объект user, который имеет ключи с заполненными значениями, ИЛИ объект с 
//ПУСТЫМИ значениями

//Чтобы state изменялся, нужно создать функцию, которая будет изменять наш state.
// function updateKey(key,event)-принимает два аргумента
//Внутри функции есть функция setUser - она же изменяет наш state,при срабатываение 
//события, которое получает данные из поля ввода.
//Эти данные отправляются в localStorage, благодаря функции onSubmit,
//Которая принимает через пропсы атрибут из AddContact, в которой содержится функция,
//которая срабатывает при нажатие на кнопку.
  const initValue = props.user || { name: "", phone: "", email: "",isFav: false }

  const [user, setUser] = React.useState(initValue);
 
  function updateKey(key, event) {
    setUser({
      ...user,
      [key]: event.target.value
    });
  }

  function onSubmit() {
    props.onSubmit(user);
  }

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

export default ContactForm;
