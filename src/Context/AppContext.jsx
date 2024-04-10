import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../helper/helper";

//creating context
const PostCtx = createContext(null);

//provider context
const AppProvider = ({children}) =>{

const navigate =useNavigate();
 const [token,setToken] = useState()
const [allPost,setAllPost]=useState();
const [err,setErr] = useState()

// to get the post of the user if he logged in
//get post from helper
    useEffect(()=>{
        getPost().then((data) =>{
             setAllPost(data.message);
    })
    },[navigate]);
  return(
    <div>
        <PostCtx.Provider value={{token, setToken, allPost,setAllPost}}>
          {children}
          </PostCtx.Provider>
    </div>
  );
};
//export the context by PostState
export const PostState=()=>{
    return useContext(PostCtx)
}
export default AppProvider
