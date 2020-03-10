import React from "react"
import { useEffect, useState } from "react"

const Page3 = () => {
  const [isName, setIsName] = useState(true)

  useEffect(() => {
    document.title = `Вы нажали ${isName} раз`
  })
  return (
    <div>
      <p>Вы нажали {isName} раз</p>
      <button onClick={() => setIsName("yo")}>Click me</button>
    </div>
  )
}

export default Page3
