import React from "react";
import ContactTable from "../../Container/ContactTable";

const FavoriteContacts = () => {
  function createData(name, phone, email) {
    return { name, phone, email };
  }

  const rows = [createData("Kris", 89345, "Google")];
  return (
    <div>
      <ContactTable contacts={rows} />
    </div>
  );
};

export default FavoriteContacts;
