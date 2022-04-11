import React from "react"
import {CgNotes} from 'react-icons/cg'
import {BiListCheck,BiLogOut}  from 'react-icons/bi'
import {ImUser} from 'react-icons/im'
export const SidebarData =[
    {
        title: "Notes",
        link : "/Dashboard/notes",
        icon : <CgNotes/>
    },
    {
        title: "Todo",
        link : "/Dashboard/todo",
        icon : <BiListCheck />
    },
    {
        title: "Profile",
        link : "/Dashboard/profile",
        icon : <ImUser />
    }
   

]