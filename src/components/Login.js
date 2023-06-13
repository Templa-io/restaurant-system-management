import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import axios from 'axios';
import swal from "sweetalert";
import { setUserSession } from "../utils/Common";


const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const [error, setError] =useState(null)
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()

   useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      // Redirect the user to the home page
      navigate('/home');
    }
  }, [navigate]);

   const handleLogin = () => {
    setError(null);

    // Validate input fields
    if (username.trim() === '') {
      setError('Username is required');
      return;
    }
    if (password.trim() === '') {
      setError('Password is required');
      return;
    }

      setError(null);
setLoading(true);
axios.post("http://34.230.46.179:8080/api/v1/auth/login", {
username:username,
password: password
}).then(response => {
setLoading(false);
setUserSession(response.data.token, response.data.user)
navigate('/home');
})// ...

.catch(error => {
 setLoading(false);
 if (error.response && (error.response.status === 401 || error.response.status === 400)) {
   setError(error.response.data.message);
 } else {
   setError("Username or Password is wrong.");
 }
 console.error('error >>>', error);
})


   }
  

  return (
    <div className='Login'>
        <div className='Left'>
            
            <div className='Header'>
                <div>Restaurant </div>
                    <div>Management</div>
                    <div> System</div>
            </div>

            <div className='description'>
                <div>This pumpkin cream soup</div>
            <div>will warm up the feintest of hearts</div> 
             </div>
  
        </div><div className='blur hero-blur'></div>
        <div className='Right '>
            
            <span className='text'>Login</span>
            <div className="signin">
              <label htmlFor='username'>Username or Email</label>
                <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="off" // Disable autofill for the username input field
                />
           <label htmlFor="password">Password</label>
           <input
           type="password"
           required
           value={password}
           onChange={e => setPassword(e.target.value)}
           autoComplete="new-password" 
           /> 
           {error && <div className='error'>{error}</div>}
           <input 
           type='button'
           className="btn"
           value={loading ? " Loading..." : "Login"}
           disabled={loading}
           onClick={handleLogin}
           />
        </div>
    </div>
    </div>
  )
}

export default Login