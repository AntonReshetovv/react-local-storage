import  {useState} from "react";

//create hook
//Передаем функцию начального состояния(initialValue) в useState
// чтобы логика выполнялась один раз
export function useLocalStorage(key,initialValue){
    const [storedValue, setStoredValue] = useState(()=>{
      try {
        //Получить данные из локального хранилища по ключу
        const item = window.localStorage.getItem('key')
         return item ? JSON.parse(item):initialValue
      }catch(error){
        console.log(error)
        return initialValue
      }
    })
  
    const setValue = value=>{
      try {
        //Разрешить value быть функцией, поэтому у нас тот же API, 
        //что и для useState
        const valueToStore = value instanceof Function ? value(storedValue):value
        //Save state
        setStoredValue(valueToStore)
        //Save to local storage
        window.localStorage.setItem(key,JSON.stringify(valueToStore))
      }catch(error){
        console.log(error)
      }
    }
    return [storedValue,setValue]
  }