import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogOut(props) {
    const navigate = useNavigate();
    props.setLoggedIn(false);
    props.setCart([])
    props.setUserid('');
    navigate("/");
    return;
}

export default LogOut;