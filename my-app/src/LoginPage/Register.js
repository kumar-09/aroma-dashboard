import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
  const [nameinput, setNameinput] = useState('');
  const [useridinput, setUseridinput] = useState('');
  const [mobileinput, setMobileinput] = useState();
  const [addressinput, setAddressinput] = useState();
  const [password, setPassword] = useState('');
  const [useridError, setUseridError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = async() => {
    setUseridError('');
    setPasswordError('');
  
    if ('' === useridinput) {
      setUseridError('Please enter userID');
      return;
    }
    // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userid)) {
    //   setUseridError('Please enter a valid userid');
    //   return;
    // }
  
    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }
  
    // if (password.length < 7) {
    //   setPasswordError('The password must be 8 characters or longer');
    //   return;
    // }

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    // let data = {
    //   userid : userid,
    //   name : name,
    //   password: password
    // };
     let data = {userid: useridinput, name : nameinput, pswd : password, mobile: mobileinput, address:addressinput}
     console.log(data);
      axios({method : 'post', url: 'http://127.0.0.1:8000/api/register/', data : data, headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(res => {
        if(res.status === 201){
        props.setLoggedIn(true);
        props.setName(res.data.name);
        props.setUserid(res.data.userid);
        props.setAddress(res.data.address);
        props.setMobile(res.data.mobile);
        navigate('/');
      }})
      .catch(err => 
        {
          
            setUseridError('User with this ID already exists');
          
        });
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Register</div>
      </div>
      <br />
      {/* <form onSubmit={onButtonClick}> */}
      <div className={'inputContainer'}>
        <input
          value={useridinput}
          placeholder="Enter your userID here"
          onChange={(ev) => setUseridinput(ev.target.value)}
          type= "text"
          className={'inputBox'}
          required
        />
        <label className="errorLabel">{useridError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={nameinput}
          placeholder="Enter your name here"
          onChange={(ev) => setNameinput(ev.target.value)}
          type= "text"
          className={'inputBox'}
          required
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={mobileinput}
          placeholder="Enter your Mobile No. here"
          onChange={(ev) => setMobileinput(ev.target.value)}
          type= "number"
          className={'inputBox'}
          required
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={addressinput}
          placeholder="Enter your Address here"
          onChange={(ev) => setAddressinput(ev.target.value)}
          type= "text"
          className={'inputBox'}
          required
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          type = "password"
          className={'inputBox'}
          required
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <button className={'inputButton'} onClick={onButtonClick} type="submit">Register</button>
      </div>
      {/* </form> */}
      
      <div className='noaccount'>
        Already have an account?
        <Link to="/login">Login Now!</Link>
      </div>
    </div>
  )
}

export default Register;