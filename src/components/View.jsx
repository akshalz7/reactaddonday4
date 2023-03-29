import { Button, Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddLibrary from './Addlibrary'

const View = () => {
    var [update,setUpdate]=useState(false)
    var[selected,setSelected] = useState([])
    var[Library,setLibrary] = useState([])
    useEffect(()=>{
        axios.get("  http://localhost:3005/Books")
        .then((response)=>{
            setLibrary(Library=response.data)
            console.log(response.data)
        })
        .catch(error=>console.log(error))
    },[])
    const updateValue =(value) => {
        setSelected(value);
        setUpdate(true);



    }
    const deleteValues = ()=>{
        console.log("delete clicked")
        axios.get("  http://localhost:3005/Books/")
        .then((response)=>{
            console.log(response);
            alert("successfully deleted");
            window.location.reload(false);
        })

    }
    var finaljsx = <TableContainer>
          <Table sx={{minWidth: 650}}aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Genre</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>author</TableCell>
                        <TableCell>Published</TableCell>
                        <TableCell>Published by</TableCell>
                        <TableCell>Delete</TableCell>
                        <TableCell>Update</TableCell>

                    </TableRow>
                    
                </TableHead>
                <TableBody>
                        {Library.map((value,index)=>{
                        return <TableRow key={index}>
                             <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.title}</TableCell> 
                        <TableCell>{value.delete}</TableCell>
                        <TableCell>{value.update}</TableCell> 
                        <TableCell>
                            <Button
                            color='error'
                            onClick={()=> deleteValues(value.id)}>Delete</Button>
                            <Button
                            color='success' onClick={()=> updateValue(value)}>Update</Button>
                        </TableCell>
                        </TableRow>
                        })}

                     
                
            
                
                </TableBody>
            

            </Table>
        </TableContainer>
        if (update)finaljsx = <AddLibrary data={selected} method="put" />
            
        

        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                {finaljsx}
            </div>
        )
        
                    
        }
    
    
    
          
        
            


export default View
           