import React, {useState, useEffect} from 'react'

import {axiosWithAuth} from '../utils/axiosWithAuth'


function FriendsList (props) {

     const [friendData, setFriendData] = useState([])

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


     return(
          <div>{
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