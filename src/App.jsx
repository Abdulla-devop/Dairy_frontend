
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Login from './Pages/Login.jsx'
import { SingupForm } from './Components/Singup.jsx'
import { useState } from 'react'


function App() {
  //state to handle the id for editing data
  const[editId,setEditId]= useState()

  return (
    <div>
      {/* Routes for all pages */}
   <Routes>
    <Route exact path = "/" element = {<Dashboard editId={editId} setEditId={setEditId} />}/>
    <Route  path = "/addpost" element = {<AddPost/>} />
    <Route path = "/user/add" element = {<AddPost/>} />
    <Route path = "/edit/:id" element = {<EditPost editId={editId}/>}/>
    <Route path = "/login" element = {<Login/>} />
    <Route path = "/signup" element = {<SingupForm/>} />
   </Routes>
    </div>
  )
}

export default App
