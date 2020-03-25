import React from "react";
import "./style.css";
import ContactTable from "../../Container/ContactTable";

const Main = props => {
  // переменная initValue, получает значение из localStorage,
  // или если нету этих значений, то получает пустой массив
  const initValue = window.localStorage.getItem("users") || "[]";
  //State который принимает в качестве изначального значение переменную initValue,
  //которую JSON.parse для того, чтобы мы получили объект из localStorage в таблицу
  const [users, setUsers] = React.useState(JSON.parse(initValue));

  React.useEffect(() => {
    //Используем useEffect для сохранения данных объекта users в localStorage
    // т.е. заносим наши данные из таблицы, в localStorage
    window.localStorage.setItem("users", JSON.stringify(users));
  });

  function deleteUserById(id) {
    const newRows = users.filter(contact => contact.id !== id);
    setUsers(newRows);
  }

  return (
    <div>
      <ContactTable
        contacts={users}
        deleteContact={deleteUserById}
        toggleFavorite={() => console.log()}
      />
    </div>
  );
};

export default Main;
