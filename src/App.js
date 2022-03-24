import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./Components/Notes/Notes";
import Todo from "./Components/Todo/Todo";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import {useState } from "react";
import Register from "./Components/Signup/Register";
function App() {
  const [user,setUser] = useState(false);
 
  return (
    <div className="App">
      

      {
        user ?
        <><Sidebar />
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/profile" element={<Profile />} />
          </Routes></> 
         :
         <Routes>
         <Route path="/" element={<Login user={user} setUser={setUser} />} />
         <Route path="/register" element={<Register setUser={setUser} />} />
        </Routes>
      }
       
         
      
      
    </div>
  );
}

export default App;
