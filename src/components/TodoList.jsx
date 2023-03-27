import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TodoList = () => {
    var[input,setinput] = useState({
        input1:'',
        fname:'',
        lname:''
    });
    const inputHandler =(e)=>{
        const{name,value}=e.target
        setinput({...input,[name]:value})
    
 
    }
    
    return (
        <div>
            <Typography mt={5}>
               
                <br />
                <br />
             
            <TextField label='type' name='type' value={input.type} onChange={inputHandler} />
            <Typography mt={3}>{input.lname}</Typography>

            </Typography>
        

            


        </div>
    )
}
    

export default TodoList

