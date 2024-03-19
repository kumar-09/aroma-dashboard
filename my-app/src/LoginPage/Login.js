import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [useridError, setUseridError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = (event) => {
    event.preventDefault();
    setUseridError('');
    setPasswordError('');
  
    if ('' === userid) {
      setUseridError('Please enter userID');
      return;
    }
    // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userid)) {
    //   setUseridError('Please enter a valid userid');
    //   return;
    // }
  
    if ('' === password) {
      setPasswordError('Please enter a password');
      props.setLoggedIn(true);
      return;
    }
  
    // if (password.length < 7) {
    //   setPasswordError('The password must be 8 characters or longer');
    //   return;
    // }
    // let data = [];
    // axios.get('http://localhost:8000/api/menu/')
    //     .then(res => {
    //       let d = res.data;
    //       data = d;
    //     })
    //     .catch(err => {console.log("Error thrown")})

    //     console.log(data);

      //   axios({method : 'get', url: 'http://localhost:8000/api/login/', data : ({userid: userid, pswd : password}), headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      // }})
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));

      // let d = {
      //   userid : userid,
      //   pswd : password
      // };
      // console.log(d);
    // axios.get('http://localhost:8000/api/login/')
    //   .then(res => {
    //     if(res.Content.ReadAsStringAsync() === "Successfully logged in"){
    //       props.setLoggedIn(true);
    //     }
    //     else{
    //       props.setLoggedIn(false);
    //     }
    //     console.log(res);
    //     console.log("then");
    //   })
    //   .catch(err => {console.log(err);console.log("catch");});
    axios({method : 'post', url: 'http://127.0.0.1:8000/api/login/', data : ({userid: userid, pswd : password}), headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(res => {console.log(res.status); 
        if(res.status === 200){ props.setLoggedIn(true); props.setUserid(userid); navigate("/");}
       })
      .catch(err => {setPasswordError("Please enter valid credentials");});
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <form onSubmit={onButtonClick}>
      <div className={'inputContainer'}>
        <input
          value={userid}
          type = 'text'
          placeholder="Enter your userID here"
          onChange={(ev) => setUserid(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{useridError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          type = 'password'
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <button className={'inputButton'} type="submit">Log in</button>
      </div>
    </form>

      <div className='noaccount'>
        Don't have an account?
        <Link to="/register">Register Here!</Link>
      </div>
    </div>
  )
}

export default Login;