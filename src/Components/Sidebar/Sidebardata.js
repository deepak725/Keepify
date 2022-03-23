import React from "react"
import {CgNotes} from 'react-icons/cg'
import {BiListCheck,BiLogOut}  from 'react-icons/bi'

export const SidebarData =[
    {
        title: "Notes",
        link : "/notes",
        icon : <CgNotes/>
    },
    {
        title: "Todo",
        link : "/todo",
        icon : <BiListCheck />
    },
    {
        title: "Profile",
        link : "/profile",
        icon : <BiLogOut />
    }

]