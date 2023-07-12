import { useState } from "react";
import { inspectUser } from "../services/userService"
import React from "react";
import displayUser from "../components/displayUser";


export const InspectScreen = ( ) =>{
    const [username, setUsername] = useState('test')
    const [user,setUser] = useState({})
    //const [username,setUsername] = useState('')
    function handleChange(event) {
        setUsername(event.target.value)
        
        console.warn(event.target.value)
        
      }

const handleSubmit = async() =>{
   

 const response =  await inspectUser(username)


setUser(response)



 

}
// COMPONENTS AND STATE, NETWORKING, ASYNC FUCNTIONS
    return (
        <div>
        <h1> Inspect</h1> 
        
        
        <input type="text" onChange = {handleChange} name ="Inspect" defaultValue = "Username"></input>
        <button onClick = {() =>handleSubmit({username})}type="submit">Inspect</button>
        
        
        <h1> {username}</h1>
        <div>{displayUser(user)}</div>
        </div>
      

        
        
    )
}

export default InspectScreen