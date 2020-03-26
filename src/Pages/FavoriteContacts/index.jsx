import React from "react"
import ContactTable from "../../Container/ContactTable"

const FavoriteContacts = () => {

  const allUsers = JSON.parse(window.localStorage.getItem('users'))
  const users = allUsers.filter((user)=> user.isFav)
  function changeFavorite(id) {
    const indexWhereUser = allUsers.findIndex(user => user.id === id)
    allUsers[indexWhereUser].isFav = !allUsers[indexWhereUser].isFav
    window.localStorage.setItem('users',JSON.stringify(users))
  }
  return (
    <div>
      <ContactTable contacts={users} toggleFavorite={changeFavorite}/>
    </div>
  )
}

export default FavoriteContacts
