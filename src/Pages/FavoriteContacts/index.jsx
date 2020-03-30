import React from "react"
import ContactTable from "../../Container/ContactTable"

const FavoriteContacts = () => {
  // Пояснение: получаем данные из localStorage
  //используя фильтр , получаем пользователей, у которых есть ключ isFav,
  //Функция, которая изменяет на избранные,принимает параметр id,
  //Сама функция ищет людей по индексу из списка, и сравнивает их id
  //Далее функция сравнивает поьзователей по их ключу, пользователи, у которых
  //Ключ true значит избранные,а пользователи у которых false не избранные))))
  //данные сохраняются в localStorage.
  //Сама функция используются в таблице, которую используют при событие клика, 
  //Если клик произошел, то на этого пользователя применяется функция, которая заносит его 
  // как настоящего избранного в localStorage
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
