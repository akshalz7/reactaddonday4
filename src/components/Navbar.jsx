import { AppBar,Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Library App
        </Typography>
        <Button color="inherit"><Link to='/Add' style={{color:'white'}}>Add</Link></Button>
        <Button color="inherit"><Link to = '/' style={{color:'white'}}>View</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
      
    </div>
  )
}

export default Navbar
