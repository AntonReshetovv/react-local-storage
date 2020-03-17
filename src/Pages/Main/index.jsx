import React from "react";
import "./style.css";
import ContactTable from "../../Container/ContactTable";

const Main = (props) => {
  function createData(id, name, phone, email) {
    return { id, name, phone, email };
  }

  const [rows, setRows] = React.useState([
    createData(0, "Kris", 89345, "Google"),
    createData(1, "Den", 3245, "Rambler"),
    createData(2, "Bill", 56423, "Yandex")
  ]);

  function addRows() {
    const newRows = [
      ...rows,
      createData(rows.length + 1, "Kriss", 89345, "Google")
    ];
    setRows(newRows);
  }

  function deletRows(id) {
    const newRows = rows.filter(contact => contact.id !== id)
    setRows(newRows)
  }

  return (
    <div>
      <button onClick={addRows}>Добавить</button>
      <ContactTable
        contacts={rows}
        deleteContact={deletRows}
        toggleFavorite={() => console.log()}
      />
    </div>
  );
};

export default Main;
