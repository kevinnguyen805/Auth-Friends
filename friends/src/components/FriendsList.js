import React, {useState, useEffect} from 'react'

import {axiosWithAuth} from '../utils/axiosWithAuth'


function FriendsList (props) {

     const [friendData, setFriendData] = useState([])
     const [newFriend, setNewFriend] = useState({
          name:'',
          email:'',
          age:''
     })


     useEffect(() => {
          getData()
     },[])

     const getData = () => {
          axiosWithAuth().get('/api/friends')
          .then(response => {
               console.log(response.data)
               setFriendData(response.data)
          })
     }

     const submitNewFriend = (event) => {
          event.preventDefault()
          const newFriendAdded = {
               ...newFriend,
               id: Date.now()
          }

          axiosWithAuth()
          .post('/api/friends', newFriendAdded)
          .then(response => {
               console.log(response)
          })
     }

     const handleChanges = event => {
          setNewFriend({
               ...newFriend,
               [event.target.name]:event.target.value
          })
     }

     return(
          <div>
               <div>
                   <form onSubmit={submitNewFriend}>
                    <input 
                         type="text"
                         name="name"
                         value={newFriend.name}
                         onChange={handleChanges}
                         placeholder="Name"
                    />
                    <input 
                         type="text"
                         name="email"
                         value={newFriend.email}
                         onChange={handleChanges}
                         placeholder="Email"
                    />
                    <input 
                         type="text"
                         name="age"
                         value={newFriend.age}
                         onChange={handleChanges}
                         placeholder="Age"
                    />
                    <button>Submit new friend</button>
                    </form> 
               </div>
          {
               friendData.map(item => {
                    return(
                         <div key={item.id}>
                              <h2>{item.name}</h2>
                              <p>{item.email}</p>
                              <p>{item.age}</p>
                         </div>
                    )
               })
          }</div>
     )
}

export default FriendsList