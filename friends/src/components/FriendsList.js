import React from 'react'

import {axiosWithAuth} from '../utils/axiosWithAuth'


function FriendsList () {

     const getData = () => {
          axiosWithAuth().get('/api/data')
          .then(response => {
               console.log(response)
          })
     }

     return(
          <div>Hello I am friends list</div>
     )
}

export default FriendsList