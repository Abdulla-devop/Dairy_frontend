import React, { useState } from "react";
import { Base } from "../Base/Base";
import { Box, Tabs, Tab,Typography } from "@mui/material";
import PropTypes from 'prop-types'
import {Form} from "../Components/Form.jsx"
import { useNavigate } from "react-router-dom";

//Login page
function CustomTabPanel(props) {
   const { children, value, index, ...other } = props;

 
   return (
    //login page header from material ui
     <div
       role="tabpanel"
       hidden={value !== index}
       id={`simple-tabpanel-${index}`}
       aria-labelledby={`simple-tab-${index}`}
       {...other}
     >
       {value === index && (
         <Box sx={{ p: 3 }}>
           <Typography>{children}</Typography>
         </Box>
       )}
     </div>
   );
 }
 CustomTabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
 };
 function a11yProps(index) {
   return {
     id: `simple-tab-${index}`,
     'aria-controls': `simple-tabpanel-${index}`,
   };
 }

export const Login = ()=> {
   const [value, setValue] = React.useState(0);
   
   const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const navigate = useNavigate();
   return (
    <div className="Log">
      <Base className="word"> 
 
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
        value={value} 
        onChange={handleChange}
        aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
     <Form btnName= {"Login"}/>
      </CustomTabPanel>
    </Box>
      </Base>
      </div>
   )
};
export default Login