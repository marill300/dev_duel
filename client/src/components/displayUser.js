import Card from "./Card"
export const displayUser = (input) =>{
    
    if(input.message === undefined){
       // return (JSON.stringify(input))
       console.log(JSON.stringify(input))
        return(

            <Card> 
            <div> {input.name} </div>
            <div> {input.location}</div>
            <div> follower count : {input.followers}</div>
           
            <img src = {input.avatar_url} alt = ''/>
            

            
            
             </Card>
             

        )
        
    }

    return ( <p>USER NOT FOUND</p>)

}

export default displayUser