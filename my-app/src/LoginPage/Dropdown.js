import React from "react";
import {Link} from 'react-router-dom';
const DropDown = () => {
    return(
        <div className="dropdown-menu" style={{display:"flex", flexDirection:"column"}}>
            <Link to='/Account'>Profile</Link>
            <Link to='/Cart'>Previous Orders</Link>
            <Link to='/'>Log Out</Link>
        </div>
    );
};

export default DropDown;