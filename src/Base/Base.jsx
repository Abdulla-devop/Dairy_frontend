import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostState } from "../Context/AppContext";
  
//creating base for navbar
export const Base = ({title,children}) =>{
  const navigate = useNavigate();

  //logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login",{replace:true})
  }
  
    return (
      //Navbar model buttons
        <div>
            <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit"onClick={()=>navigate("/")}>Home</Button>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Diary
          </Typography>

          <Button color="inherit"
          onClick={()=>navigate("/signup")}>Singup</Button>
          
      
          <Button color="inherit"
          onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
            </div>
            <div>
                <h1>{title}</h1>
                <div>{children}</div>
            </div>
        </div>
    )
}