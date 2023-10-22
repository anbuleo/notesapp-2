import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


function Sidebar() {
    let location = useLocation()
    
    let {pathname} = location

    let splitLocation = pathname.split('/')

  return   <div  className="sidebar  p-3   position-fixed ">
    <div  className="logo d-inline-flex p-2 mb-4 gap-2 ">
        <div  className="logo_img"><img src="src/assets/logo_img.svg" alt="logo" /></div>
        <div  className="name_email">John Doe <br />johndoe@gmail.com</div>
    </div>
    <div  className="list d-flex flex-column gap-3">
        
        <li  className={splitLocation[1] === "home" ? "active  btnCostom d-flex gap-2 p-2" : "  btnCostom d-flex gap-2 p-2"} ><i  className={splitLocation[1] === "home" ? ' active fa-solid fa-house fa-sm align-self-center':'fa-solid fa-house fa-sm align-self-center' }></i><Link  to='/home' className={splitLocation[1] === "home" ?'link active': 'link'} >Home</Link></li>
        <li  className=' btn-outline btnCostom d-flex gap-2 p-2'><i className="fa-solid fa-magnifying-glass align-self-center"></i>Search</li>
        <li  className={splitLocation[1] === "notes" ? "active  btnCostom d-flex gap-2 p-2" : "  btnCostom d-flex gap-2 p-2"}><i className={splitLocation[1] === "notes" ?"active fa-regular fa-file-lines align-self-center":"fa-regular fa-file-lines align-self-center"}></i><Link  to='/notes' className={splitLocation[1] === "notes" ?'link active': 'link'} >Notes</Link></li>
        <li  className={splitLocation[1] === "task" ? "active  btnCostom d-flex gap-2 p-2" : "  btnCostom d-flex gap-2 p-2"}><i className={splitLocation[1]=== "task"?" active fa-regular fa-circle-check align-self-center":"fa-regular fa-circle-check align-self-center"}></i><Link  to='/task' className={splitLocation[1] === "task" ?'link active': 'link'} >Tasks</Link></li>
        <li  className=' btnCostom d-flex gap-2 p-2'><i className="fa-solid fa-square-caret-down align-self-center"></i>Archive</li>
        <li  className=' btnCostom d-flex gap-2 p-2'><i className="fa-solid fa-trash-can align-self-center"></i>Bin</li>
       
    </div>

  </div>

}

export default Sidebar