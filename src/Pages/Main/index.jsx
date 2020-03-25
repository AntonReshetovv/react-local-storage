import React from "react";
import "./style.css";
import ContactTable from "../../Container/ContactTable";

const Main = props => {

  const initValue = window.localStorage.getItem("users") || "[]";

  const [users, setUsers] = React.useState(JSON.parse(initValue));

  React.useEffect(() => {
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
