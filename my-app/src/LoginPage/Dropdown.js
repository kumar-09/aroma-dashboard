import React from "react";
import {Link} from 'react-router-dom';
import LogOut from './Logout';
const DropDown = (props) => {
    return(
        <div className="dropdown-menu" onMouseEnter = {()=>{props.setHover(true);}} onMouseLeave = {()=>{props.setHover(false);}} style={{display:"flex", flexDirection:"column"}}>
            <a href='/Account'>Profile</a>
            <a href='/Cart'>Previous Orders</a>
            <Link to="./Logout">Log Out</Link>
        </div>
    );
};

export default DropDown;