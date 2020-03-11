import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const Form = () => {
  return (
    <form>
      <TextField id="standard-basic" label="Name" className='input'/>
      <TextField id="standard-basic" label="Phone" className='input'/>
      <TextField id="standard-basic" label="Email" className='input'/>
      <Button variant="contained" className='button'>Добавить</Button>
    </form>
  );
};

export default Form;
