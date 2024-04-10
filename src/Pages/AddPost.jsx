import React, { useEffect, useState } from "react";
import { Base } from "../Base/Base";
import { useNavigate } from "react-router-dom";
import { addNewPost, getPost } from "../helper/helper";
import { useFormik } from "formik";
import { postSchema } from "../helper/schema";
import { PostState } from "../Context/AppContext";

//add post page
export const AddPost = ()=> {

   const navigate = useNavigate();
   const {setAllPost} = PostState()
   const [err,setErr] = useState()

   // getting token to validate user
useEffect(()=>{
   if(!localStorage.getItem("token")){
      navigate("/login"),{replace:true}
    }
},[navigate])
  

  // using formick to handle errors and to add values
   const {values,handleChange,handleSubmit,handleBlur,errors,touched}= useFormik({
      initialValues:{
         title:"",
         content:"",
      },
      validationSchema:postSchema,
      onSubmit:(newPostDetails)=>{
         addingNewPost(newPostDetails)
      }
   });
      // add function
   const addingNewPost = (createPost) => {
      //addnewpost from helper.jsx
      addNewPost(createPost).then((data)=>{
         if(!data) setErr('something went wrong', {type:400})
         if(data){
            getPost().then((data) =>{
               setAllPost(data.message);
      })
            navigate("/")
         }
         
      })
   }
   return (
      <Base>
      <div className="dash">
               {/* Add form  */}
   <div>
      <form onSubmit={handleSubmit}>
      <input 
      type="date" 
      className="small"
      name="date"
      onChange={handleChange}
       onBlur={handleBlur}/>
      <div>
      <input type="text"  
      placeholder="Enter Title" 
      className="small"
      value={values.title}
      name="title"
      onChange={handleChange}
      onBlur={handleBlur}/>  
        { touched.title && errors.title? <div  className="text">{errors.title}</div>:""} 
      </div>
      <div>
       <textarea 
       rows="25"  
       placeholder="Enter Content" className="box"
       value={values.content}
       name="content"
       onChange={handleChange}
       onBlur={handleBlur}
       />
         { touched.content && errors.content? <div className="text">{errors.content}</div>:""} 
      </div>
      <button className="postbtn" 
      type="submit"
       >Create Post</button>
      </form>
   </div>
   </div>
      </Base>
   )
}
export default AddPost