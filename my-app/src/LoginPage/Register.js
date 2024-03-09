import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = async() => {
    setEmailError('');
    setPasswordError('');
  
    if ('' === email) {
      setEmailError('Please enter userID');
      return;
    }
    // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    //   setEmailError('Please enter a valid email');
    //   return;
    // }
  
    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }
  
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    // let data = {
    //   userid : email,
    //   name : name,
    //   password: password
    // };
    
      axios({method : 'post', url: 'http://127.0.0.1:8000/api/register/', data : ({userid: email, name : name, pswd : password}), headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Register</div>
      </div>
      <br />
      <form>
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your userID here"
          onChange={(ev) => setEmail(ev.target.value)}
          type= "text"
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={name}
          placeholder="Enter your name here"
          onChange={(ev) => setName(ev.target.value)}
          type= "text"
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          type = "password"
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="submit" onClick={onButtonClick} value={'Register'} />
      </div>
      </form>
      
      <div className='noaccount'>
        Already have an account?
        <Link to="/login">Login Now!</Link>
      </div>
    </div>
  )
}

export default Register;