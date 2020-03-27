import React from "react";
import {
  useHistory
} from "react-router-dom";
import "./style.css";
import ContactTable from "../../Container/ContactTable";

const Main = props => {
//Пояснение: Страничка получает данные в state из localStorage,
// и отрисовывает эти данные в таблице
//Функция navigateToEditPage прокидывается через пропсы в таблицу на кнопку edit
//эта функция выполняет роль добавляет в url id пользователя, это id она получает со всеми 
//данными из localStorage

  let history = useHistory();
 
  const initValue = window.localStorage.getItem("users") || "[]";
 
  const [users, setUsers] = React.useState(JSON.parse(initValue));

  React.useEffect(() => {
    //Используем useEffect для сохранения данных объекта users в localStorage
    // т.е. заносим наши данные из таблицы, в localStorage
    window.localStorage.setItem("users", JSON.stringify(users));
  });

  function navigateToEditPage(id) {
    history.push('/edit/' + id)
  }

  return (
    <div>
      <ContactTable
        contacts={users}
        onUpdate={navigateToEditPage}
        toggleFavorite={() => console.log()}
      />
    </div>
  );
};

export default Main;
