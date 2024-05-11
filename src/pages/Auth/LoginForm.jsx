import React, { useEffect, useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom';
import "./Auth.css"
import { signIn, useAuth } from '../../../firebase';
import { FaFacebook, FaGoogle } from 'react-icons/fa';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const user = useAuth();
    

    const handleLogin = (e) => {
      e.preventDefault();
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(email && password) {
        if(email.match(mailformat)){
          signIn(email, password); 
          if(user){
            window.history.back();
            setSuccess("user registered in successfully");
          }
        } else {
          setError("You have entered an invalid email address!");
          return;
        }
      } else return;
    }
    useEffect(() => {
        setTimeout(() => {
            error && setError(null);
            success && setSuccess(null);
        }, 2000);
    }, [success, error]); 
    return (
        <div className='auth'>
            {user && (
            <Navigate to="/profile" replace={true} />
          )}
            <form onSubmit={handleLogin}>
                
                <h1>Welcome Back</h1>
                <input type="text" id='username' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password"id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className='btn' type='submit' title='submit'>Login</button>
                
                {
                    error && <p className='error'>{error}!</p>
                }
                {
                    success && <p className='success'>{success}!</p>
                }
                 <p>Continue with:</p>
                <span>
                  <span><a href="" className='btn google'> <>Google</><FaGoogle /></a></span>
                  <span><a href="" className='btn facebook'>Facebook <FaFacebook /></a></span>
                </span>
                <p>Don't have an account? <NavLink to="/get-started">get started</NavLink></p>
            </form>
        </div>
    );
}

export default LoginForm; 