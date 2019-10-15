import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {Redirect} from 'react-router-dom'

function Login (props){

     const [credentials, setCredentials] = useState({
          username:'',
          password:''
     })

     const handleChanges = event => {
          setCredentials({
               ...credentials, [event.target.name]:event.target.value
          })
     }

     const submitLogin = event => {
          event.preventDefault();
          console.log(credentials)
          axiosWithAuth().post('/api/login', credentials)
               .then(response => {
                    console.log(response.data)
                    localStorage.setItem('token', response.data.payload)
                    props.history.push('/protected')
               })
     }
     
     

     return(
          <div>
               <form onSubmit={submitLogin}>
                    <input 
                         type="text"
                         name="username"
                         value={credentials.username}
                         onChange={handleChanges}
                         placeholder="Username"
                    />
                    <input
                         type="password"
                         name="password"
                         value={credentials.password}
                         onChange={handleChanges}
                         placeholder="Password"
                    />
                    <button>Log in</button>
               </form>
          </div>
     )
}

export default Login 