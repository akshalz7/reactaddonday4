import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddLibrary = (props) => {
  var[input,setInput]=useState(props.data)
  console.log("add page props" + props.data)


  
  const inputHandler = (e)=>{
      const{name,value} = e.target
      setInput({...input,[name]:value})
  
  }
const readValues = ()=> {
  console.log("clicked")
  console.log(input);

  if (props.method ==="post"){


  axios.post("http://localhost:3005/Books/",input)
  .then((response) => {
    console.log("post data" + response.data)
    alert("success")
  })
  .catch(err=> {
    console.log(err)
})
} else if (props.method === "put") {
  axios.post("http://localhost:3005/Books/"+ input.id,input)
  .then((response) => {
    console.log("post data" + response.data)
    alert("success")
    window.location.reload(false);

})
.catch((err) => {
  console.log(err)
})
}
}

  return (
    <div>
      <TextField label='Genre' name='genre'variant='outlined' value={input.genre} onChange={inputHandler}/>
      <br></br>
      <TextField label='Title' name='title'variant='outlined' value={input.title} onChange={inputHandler}/>
      <br>
      </br>
      <Button variant='contained' onClick={readValues} color='success'>Submit</Button>

</div>
  )
  }
  


export default AddLibrary
