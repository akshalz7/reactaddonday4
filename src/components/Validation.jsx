import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () =>{
    var[submitted,setSubmitted]=useState(false)
    var[value,setValue]=useState({
        fname:''
    })
    var[Validation,setValidation]=useState({
        fname:''
    }
    )
    const handleSubmit=(e)=>{
        
    e.preventDefault();
    setSubmitted(true);
    }
        
    


    const handleinput =(e)=>{
        const {name,value}=e.target
        setValue({...value,[name]:value})
        console.log(value)
    }
  

        const checkValidation=()=>{
            let error=Validation
            if(!value.fname.trim()){
                error.fname="Enter the first name"
            }else{
                error.fname=""
            }
            setValidation(error);
            }
            useEffect(()=>{
                checkValidation()
            })
        

  return(
    <div>
        <form
            onSubmit={handleSubmit}
            >
        <TextField label='First Name' name='fname'
        value={value.fname} onChange={handleinput}/>
        <br /> <br />
        {(Validation.fname && submitted) && <p>{Validation.fname}</p>} 
        <button variant='contained' type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Validation
