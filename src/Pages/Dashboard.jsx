import React, { useEffect, useState } from "react";
import { Base } from "../Base/Base";
import { PostState } from "../Context/AppContext";
import { Paper } from "@mui/material";
import { useNavigate} from "react-router-dom";
import { deletePost, getPost } from "../helper/helper";

//Dashboard page
export const Dashboard = ({setEditId})=> {
   const navigate = useNavigate();
   const [err,setErr]=useState("")
   const {allPost,setAllPost}=PostState()
  
    // getting token to validate user
   useEffect(()=>{
      if(!localStorage.getItem("token")){
         navigate("/login"),{replace:true}
       }
   },[navigate])
  
  //handling edit function storing userid in setEditId
  const handleEdit=(id)=>{
   navigate(`/edit/${id}`)
   setEditId(id)
  }

// delete function 
      function deletebox(id){
       var confirmation = confirm("Click OK to delete the post permanently from your diary")
       if(confirmation){
         deletePost(id).then((data)=>{
            if(data){
               getPost().then((data) =>{
                  if(data.error){
                     setErr(data.error)
                  }else{
                     setAllPost(data.message)
                  }
               
               }
               )}
         })
         alert("Post deleted Successfully!")
       }else{
         alert("Delete operation cancelled")
       }
        }
   
   return (
      <div className="dash">
    <Base> 
     <div>
     <button className="adtbtn">
                 <span className="material-symbols-outlined"onClick={()=>navigate("/addpost")}> Add </span>
                 </button>
    </div>
    {/* mapping allpost data to view all the post of user */}
  {allPost?.map((data,idx) => (
            <Paper elevation={6} key={idx}>
               <div className="post">
                <p>{data.post_Date}</p> 
                </div>
                <div className="post">
                 <h5>{data.title}</h5> 
                 </div> 
                 <div className="post">
                 <h4>{data.content}</h4>
                 </div>
                 <button className="delbtn">
             <span className="material-symbols-outlined" onClick={()=>deletebox(data._id)}>
                       delete
                        </span>
                 </button>
                 <button className="edtbtn">
                 <span className="material-symbols-outlined"onClick={()=>handleEdit(data._id)}> Edit </span>
                 </button>
            </Paper>
  ))}

    </Base> 
    </div>
   )
}
export default Dashboard