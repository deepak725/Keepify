import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Notes from "./Components/Notes/Notes";
// import Todo from "./Components/Todo/Todo";
// import Profile from "./Components/Profile/Profile";
import {useState } from "react";
import { Outlet } from "react-router";
import { SidebarData } from './Components/Sidebar/Sidebardata'

function Inside () {
  const [user,setUser] = useState(false);
 
  return (
    <div className="App">

      
        <>
        <Sidebar setUser={user} SidebarData={SidebarData} />
        <Outlet />
          </> 
         
      
      
         
      
      
    </div>
  );
}

export default Inside;
