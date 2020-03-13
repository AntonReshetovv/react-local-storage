import React from "react";
import "./style.css";
import ContactTable from "../../Container/ContactTable";

const Main = () => {
  function createData(name, phone, email) {
    return { name, phone, email };
  }

  const rows = [
    createData("Kris", 89345, "Google"),
    createData("Den", 3245, "Rambler"),
    createData("Bill", 56423, "Yandex")
  ];

  return (
    <div>
      <ContactTable contacts={rows} />
    </div>
  );
};

export default Main;
