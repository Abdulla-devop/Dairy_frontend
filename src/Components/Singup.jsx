import { TextField } from "@mui/material";
import React, { useState } from "react";
import {  signupUser } from "../helper/helper";
import { PostState } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../helper/schema";
import { Base } from "../Base/Base";

//Singup form
export const SingupForm = ()=>{
  const [msg,setMsg] = useState("")
  const [err,setErr] = useState("")
  const {setToken} = PostState();
  const navigate = useNavigate();

  // using formick to handle errors and to update values
    const {values, handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
      initialValues:{
        name:"",
        email:"",
        password:"",
      },
      validationSchema:signupSchema,
      onSubmit:(newData)=>{
         newUser(newData)
      }

    })
    //singup function
    const newUser=(userData)=>{
    signupUser(userData).then((data)=>{
      console.log(data)
     if(data.error){
       console.log("error")
     }else{
       localStorage.setItem("token",data.token)
       setToken(data.token)
       setMsg(data.data)
       navigate("/")
     }
    })
    .catch((err)=>console.log(err));
  }
   return(
    <div className="Log">
    <Base>
      {/* singup form */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="forms">
          <div className="signform" >
         <TextField id="standard-basic" 
             label="UserName" 
             variant="standard"
             value={values.name}
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
         />
         {touched.name && errors.name ? <div className="text">{errors.name}</div>:"" }
            <TextField id="standard-basic" 
            label="Email" 
            variant="standard"
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}/>
           {touched.email && errors.email ? <div className="text">{errors.email}</div>:"" }
            <TextField id="standard-basic" 
            label="Password" 
            variant="standard"
            type="password"
            value={values.password}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}/>
           
            {touched.password && errors.password? <div className="text">{errors.password}</div>:""}

            <button className="postbtn" type="submit">Signup</button>
          </div>
          </div>
          </form>
         </div> 
         </Base>
         </div>
    )
  }
  export default SingupForm