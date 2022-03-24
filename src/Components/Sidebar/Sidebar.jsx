import React from 'react'
import {NavLink} from 'react-router-dom'
import './Sidebar.css'
import { SidebarData } from './Sidebardata'
const Sidebar = () => {
  return (
    <>
        <div className="sidebar" >
            <p className='userName'>Deepak</p>
             <ul className='sidebar-list'>
                {SidebarData.map((val,key) =>{
                     return (
                   <NavLink  to={val.link}  className={'linktag'}  >  
                 
                   <li key={key} className="row" onClick={()=>{

                     }}>
                        <div className='icon' >{val.icon}</div>
                        <div className='title'>{val.title}</div>
                     </li></NavLink>);
                })}
             </ul>
        </div>
    </>
  )
}

export default Sidebar