//importing api from api.jsx
import { BasePostAPI,  BaseUserAPI } from "./Api"

export const signupUser = async(userInfo)=>{
    try {
        const res = await fetch(`${BaseUserAPI}/singup`,{
            method:"POST",
            body:JSON.stringify(userInfo),
            headers:{
                "Content-Type":"application/json",
            },
        })
        const data = res.json();
        return data;
    } catch (error) {
        return error
    }
}

export const loginUser = async(userInfo)=>{
    try {
        const res = await fetch(`${BaseUserAPI}/login`,{
            method:"POST",
            body:JSON.stringify(userInfo),
            headers:{
                "Content-Type":"application/json",
            },
        });
        const data = res.json();
        return data;
    } catch (error) {
        return error
    }
}

//getting all post of the user Api function
export const getPost = async()=>{
     try {
        const token = localStorage.getItem("token")
        const res = await fetch (`${BasePostAPI}/user/all`,{
            method:"GET",
            headers:{
               "x-auth-token":token,
               "Content-Type":"application/json",
            },
           });
       const data = await res.json();
       return data;
        
     } catch (error) {
        console.log(error,"error")
     }
}

//add post Api function
export const addNewPost = async(newAdd) => {
    try {
        const token = localStorage.getItem("token")
        const res = await fetch(`${BasePostAPI}/create`,{
            method:"POST",
            body:JSON.stringify(newAdd),
            headers:{
               "x-auth-token":token,
               "Content-Type":"application/json",
            },
           });
       const data = await res.json();
       return data
    } catch (error) {
        console.log(error,"error")
    }
}

//edit post Api function
export const editNewPost = async(id,newEdit) => {
    try {
        const token = localStorage.getItem("token")
        const res = await fetch(`${BasePostAPI}/edit/${id}`,{
            method:"PUT",
            body:JSON.stringify(newEdit),
            headers:{
               "x-auth-token":token,
               "Content-Type":"application/json",
            },
           });
       const data = await res.json();
       return data
    } catch (error) {
        console.log(error,"error")
    }
}

//delete post Api function
export async function deletePost(id){
    try {
        const token = localStorage.getItem("token")
        const res = await fetch(`${BasePostAPI}/delete/${id}`,{
            method:"DELETE",
            headers:{
                "x-auth-token":token,
            },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error,"error")
        
    }
}