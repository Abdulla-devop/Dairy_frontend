import React, { useEffect, useState } from "react";
import { Base } from "../Base/Base";
import { useNavigate} from "react-router-dom";
import { editNewPost, getPost } from "../helper/helper";
import { PostState } from "../Context/AppContext";

//edit post function
export const EditPost =({editId})=>{
   const navigate = useNavigate();
   const [date,setDate] = useState()
   const [title,setTitle] = useState()
   const [content,setContent] = useState()
   const [index,setIndex] = useState()
   const {allPost,setAllPost} = PostState()

   // to get data while rendering the page
   useEffect(()=>{
      const selectedPost = allPost.filter((data)=>data._id == editId)
     const selectedIndex = allPost.findIndex((data)=>data.id == editId);
     setIndex(selectedIndex)
      setDate(selectedPost[0].post_Date);
      setTitle(selectedPost[0].title);
      setContent(selectedPost[0].content)
    },[editId])

    //edit function
      const updatePostDetails =(e) =>{
         e.preventDefault()
      const editPostId = {
            _id:editId,
             title,
             content
      }
      editNewPost(editId,editPostId).then((data)=>{
         if(data){
         getPost().then((data) =>{
            setAllPost(data.message);
   })
            navigate("/")
         }else{
            console.log("error")
         }
     
         
      })
    }
   return (
      <div className="dash">
      <Base>
                      {/* Edit form */}
      <div>
      <form>
      <input 
      type="text" 
      className="small"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      />
      <div>
      <input type="text"  
      placeholder="Enter Title" 
      className="small"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}/>  
        </div>
        <div>
       <textarea 
       rows="25"  
       placeholder="Enter Content" className="box"
       value={content}
       onChange={(e)=>setContent(e.target.value)}
       />
        </div> 
      <button className="postbtn" 
      onClick={updatePostDetails}
       >Update Post</button>
      </form>
      </div>
   </Base>
   </div>
   )
}
export default EditPost