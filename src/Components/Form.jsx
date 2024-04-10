import { TextField } from "@mui/material";
import React, { useState } from "react";
import { loginUser } from "../helper/helper";
import { PostState } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
  

// login form details

export const Form = ({btnName})=>{
  const [username,setUserName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [msg,setMsg] = useState("")
  const [err,setErr] = useState("")
  const {setToken} = PostState();
  const navigate = useNavigate();

  //login function
  const handleLogin = async()=>{
    const userData ={
      name:username,
      email,
      password,
     }
     loginUser(userData).then((data)=>{
       console.log(data)
      if(data.error){
        console.log("error")
        setErr(data.error)
        setMsg("")
      }else{
        localStorage.setItem("token",data.token)
        setToken(data.token)
        setMsg(data.message)
        setErr("")
        navigate("/")
      }
     })
     .catch((err)=>console.log(err));
        
  };
    return(
      //Login form
      <div className="logform">
        <h3>Login</h3>
          <div className="forms">
          <TextField id="standard-basic" 
             label="UserName" variant="standard"
             value={username}
          onChange={(e)=>setUserName(e.target.value)}/>

            <TextField id="standard-basic" 
            label="Email" 
            variant="standard"
            value={email}
            required
            onChange={(e)=>setEmail(e.target.value)}/>

            <TextField id="standard-basic" 
            label="Password" 
            variant="standard"
            type="password"
            value={password}
            required
            onChange={(e)=>setPassword(e.target.value)}/>
              <button className="signbtn" onClick={btnName === "Login" ? handleLogin : handlesignup}>{btnName}</button>
          </div>
          {/* error handling messages */}
          <div>
            <div style={{color:"teal"}}>{msg? msg:""}</div>
            <div style={{color:"crimson"}}>{err? err:""}</div>
            </div>
          </div>
    )
  }
  export default Form