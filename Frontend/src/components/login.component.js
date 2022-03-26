import { message } from "antd";
import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import  {loginRequest} from "../store/Reducers/login";
import {Dummy} from "./dummy.component";
// import { Route } from "react-router-dom";
import {  Route, useHistory } from "react-router-dom";

const Login =  (props) => {
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const history = useHistory();
    useEffect(() =>{
         
        if(props.status == 200){
        history.push(`/dashboard`);
        // <Route exact path='/dashboard' component={Dummy} /> 

        }
        
    },[props.token])
    const handleSubmit = (e) => {
        e.preventDefault();
        let values= {password,email};
        if(password == "" || email == ""){
            message.error("Fill the fields properly");
            return
        };
       
        props.loginRequest(values);
    }
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value = {email}
                     onChange = {(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value = {password}
                     onChange = {(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>

               

                <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-dark btn-lg btn-block">Sign in</button>
               
            </form>
        );
    }

    const mapDispatchToProps = {
        loginRequest,
      }
      const mapStateToProps = (login) => ({
        status:login.status,
        token:login.token
    });
    
      export default connect(mapStateToProps,mapDispatchToProps)(Login);