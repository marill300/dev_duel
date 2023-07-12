import React from "react";
import { Link } from "react-router-dom";

export const HomeScreen = ( ) =>{

    return (
        <div>     
        <h1> Welcome to Dev Duel</h1>
        <Link to='/inspect'> <button> Inspect</button> </Link>
        
        <Link to='/duel'> <button> Duel</button> </Link>
        </div>
    )
}

export default HomeScreen