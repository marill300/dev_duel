import { useState } from "react";
import { duelUsers } from "../services/userService"
import React from "react";
import displayUser from "../components/displayUser";
import styled from "styled-components";

export const DuelScreen = ( ) =>{
    const [username, setUsername] = useState({name1: 'test',name2:'test2'})
    const [user,setUser] = useState({})
    const [user2,setUser2] = useState({})
    const [searched,setSearched] = useState(false)
    const [winner, setWinner] = useState({})
   // const[user2,setUser2] =useState({})

const handleSubmit = async() =>{
  

 const response =  await duelUsers(username.name1,username.name2)
 
        setUser(response[0])
        setUser2(response[1])

        
        
        DecideWinner(response)








}

const DecideWinner = (response) => {
    setSearched(false)
    if(response.message === undefined){
        if (response[0].followers > response[1].followers){
            setWinner(response[0])
            console.log('0 wins')
        }
        else{
            setWinner(response[1])
            console.log('1 wins')
        }
        setSearched(true)
        return winner
    }

    else {
        setSearched(false)
        setWinner('not searched')
    }
    
    
}

    return (
        <Wrapper>
        <h1> Duel</h1> 
        
        
      
        
        <input className = '1' type="text" onChange = {e => setUsername({...username, name1:e.target.value})} name ="Inspect" defaultValue = "Username"></input>
        <input className = '2' type="text" onChange = {e => setUsername({...username, name2:e.target.value})} name ="Inspect" defaultValue = "Username"></input>
        <button onClick = {() =>handleSubmit({username})}type="submit">Duel</button>
        
        
        
        
        <Display>  {displayUser(user)}  {displayUser(user2)}  </Display>
            
        {searched ? <h1> {winner.name } wins</h1>:'no users found' }
      
           
          
           
        </Wrapper>
      
           
    )
}
const Display = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
gap: 50px;
align-items: center;
text-align: center;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
gap: 50px;
min-height: 100vh;
text-align: center;
`;

export default DuelScreen