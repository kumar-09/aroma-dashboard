import React from "react";
import {Link} from 'react-router-dom';
import LogOut from './Logout';
const DropDown = (props) => {
    return(
        <div className="dropdown-menu" onMouseEnter = {()=>{props.setHover(true);}} onMouseLeave = {()=>{props.setHover(false);}} style={{display:"flex", flexDirection:"column"}}>
            <Link to='/Account'>Profile</Link>
            {!props.admin && <Link to='/Cart'>Previous Orders</Link>}
            <Link to="./Logout">Log Out</Link>
        </div>
    );
};

export default DropDown;