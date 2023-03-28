import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
  var[input,setInput]=useState({
    name:'',
    grade:''
  })
  const inputHandler = (e)=>{
      const{name,value} = e.target
      setInput({...input,[name]:value})
  }
  
const readValues = ()=>{
  console.log("clicked")
  axios.post("http://localhost:3005/students",input)
  .then(response=>{
    alert("success")
  })
  .catch(err=>console.log(err))
}
  return (
    <div>
      <TextField label='Name' name='name'variant='outlined' value={input.name} onChange={inputHandler}/>
      <br></br>
      <TextField label='grade' name='grade'variant='outlined' value={input.grade} onChange={inputHandler}/>
      <br>
      </br>
      <Button variant='contained' onClick={readValues} color='success'>Submit</Button>

</div>
  )
}

export default Add
