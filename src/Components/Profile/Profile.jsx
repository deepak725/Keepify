import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
const Profile = ({setUser}) => {
  let navigate = useNavigate();
  return (
    <div className='profile'>
      <h1>Username: lerom espom </h1>
      <h2>Email: emailexample@gmail</h2>
      <button type="submit" id="submit-btn" className="btn btn-dark btn-lg btn-block" onClick={(event)=>{
        
        event.preventDefault();
        setUser(false);
        navigate("/");

      }} >Logout</button>
      </div>
  )
}

export default Profile