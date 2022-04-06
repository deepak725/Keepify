import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import {FaEdit} from 'react-icons/fa';

const Profile = ({setUser}) => {
  let navigate = useNavigate();
  return (
    <div className='profile'>
      <div className='profile-username'>
      <h1>Username: lerom espom </h1> 
      <FaEdit className='edit'/>
      </div>
      
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