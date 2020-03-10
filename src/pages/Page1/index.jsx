import React from "react"
import Button from "@material-ui/core/Button"
import Forms from "../../container/Forms/index"

const Page1 = () => {
  const [toggle, setToggle] = React.useState(true)
  return (
    <div className="pageOne">
      <h3>Task</h3>
      <Button
        variant="contained"
        className="button"
        onClick={() => setToggle(!toggle)}
      >
        Add Button
      </Button>
      {toggle && <Forms />}
    </div>
  )
}

export default Page1
