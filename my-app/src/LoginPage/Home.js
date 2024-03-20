import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login';

const Home = (props) => {
  const loggedIn = props.loggedIn;
  const userid = props.userid;
  const navigate = useNavigate();

  const onButtonClick = () => {
    
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your userid address is {userid}</div> : <div />}
      </div>
    </div>
  )
}

export default Home