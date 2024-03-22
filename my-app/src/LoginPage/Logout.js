import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogOut(props) {
    const navigate = useNavigate();
    
    var str = 'http://localhost:8000/api/logout/' + props.userid + "/" + props.sessionkey + "/";
    axios.get(str)
    .then(res=>{
        if(res.status === 200){
            props.setLoggedIn(false);
            props.setCart([])
            props.setUserid('');
            props.setAdmin(false);
            props.setName('');
            props.setAddress("");
            props.setMobile("");
            props.setHover(false);
            localStorage.setItem('aromas_session_key',"");
            // localStorage.removeItem('aromas_session_key')
        }
        else{
            navigate("/");
        }
    })
    .catch(err=>{
        console.log(err);
    })
    navigate("/");
    return;
}

export default LogOut;