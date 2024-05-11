import React, { useEffect, useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom';
import "./Auth.css"
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { signUp, updateUser } from '../../../firebase';


const RegisterForm = ({user}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    
  
    const handleRegister = (e) => {
        e.preventDefault();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(email && password) {
            if(email.match(mailformat)){
              if(password.match(passw)) {
                const our_user = signUp(email, password);
                if(!our_user.displayName) {
                  updateUser(username);
                } else{
                  return;
                }
               } else {
                setError('Wrong password format!')
                return ; 
               }
             } else {
               setError("You have entered an invalid email address!")
               return ;
            }
        } else {
          setError('enter email and password');
          return;
        }
        setSuccess("user registered in successfully");
        window.history.back();
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
            <form onSubmit={handleRegister}>
                <h1>Get Started</h1>
                <input type="text" id='username' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password"id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password"id='password' placeholder='Repeat Password' required />
                <button className='btn' type='submit' title='submit'>Register</button>
                {
                    error && <p className='error'>{error}!</p>
                }
                {
                    success && <p className='success'>Your message was submitted successfully!</p>
                }
                <p>Continue with:</p>
                <span>
                  <span><a href="" className='btn google'> <>Google</><FaGoogle /></a></span>
                  <span><a href="" className='btn facebook'>Facebook <FaFacebook /></a></span>
                </span>
                <p>Already have an account? <NavLink to={"/login"}>Login</NavLink></p>
            </form>
        </div>
    );
}

export default RegisterForm; 