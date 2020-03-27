import React from "react";
import ContactForm from "../../Container/ContactForm";
import Container from "@material-ui/core/Container";
import {
  useParams
} from "react-router-dom";

const ChangeContact = () => {
  //Получаем данные из localStorage, далее эти данные фильтруем по id 
  // и присваиваем это id useParams и тем самым меняем, url странички, добавляее в url id
  //При нажатие на кнопку изменить срабатывает функция,updateUserInLocalStorage
  //Которая ищет пользователя по индексу в списке пользователей, сравнивает id пользователя 
  // полученное из localStorage с id пользователя которого хотим изменить, когда id
  // одинаковые мы можем изменить данные пользователя, и нажать на кнопку обновить, и данные
  // записываются в localStorage

  let { user_id } = useParams();
  const users = JSON.parse(window.localStorage.getItem('users'));
  const user = users.find((user) => user.id === +user_id);
  
  function updateUserInLocalStorage(updatedUser) {
    const indexWhereUser = users.findIndex(isUser =>isUser.id === user.id);
    users[indexWhereUser] = updatedUser;
    window.localStorage.setItem('users',JSON.stringify(users))
  }

  return (
    <Container maxWidth="sm">
      <h2>Обновление контакта {user_id}</h2>
      <ContactForm user={user} onSubmit={updateUserInLocalStorage}/>
    </Container>
  );
};

export default ChangeContact;
