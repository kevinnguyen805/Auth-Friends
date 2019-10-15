import React, {useState} from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'


function Login (){

     const [credentials, setCredentials] = useState({})

     const handleChanges = event => {
          setCredentials({
               ...credentials, [event.target.name]:event.target.value
          })
     }

     const submitLogin = event => {
          event.preventDefault();
          axiosWithAuth().post('/api/login', credentials)
               .then(response => {
                    console.log(response)
                    // localStorage.setItem('token', response.data.token)
                    // this.props.history.push('/')
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