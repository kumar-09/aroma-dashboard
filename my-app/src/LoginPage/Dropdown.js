import React from "react";
import {Link} from 'react-router-dom';
import LogOut from './Logout';
const DropDown = (props) => {
    return(
        <div className="dropdown-menu" style={{display:"flex", flexDirection:"column"}}>
            <Link to='/Account'>Profile</Link>
            <Link to='/Cart'>Previous Orders</Link>
            <a onClick={props.setLoggedIn(false)}>Log Out</a>
        </div>
    );
};

export default DropDown;