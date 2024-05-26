import { useState } from "react"

export function CreateTodo(){
    // creating local state variable to store the current state/values
    const [title,setTitle]=useState();
    const [description,seTdescription]=useState();
    return <div>
        <input id="first" type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}></input><br></br>
        <input type="text" placeholder="description" onChange={function(event){
            const value=event.target.value;
            seTdescription(value);
        }}></input><br></br>

        <button onClick={()=>{
            fetch("http://localhost:3000/creates",{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify({
                    title:title,
                    description:description
                })
            })
            .then(async function(res){
                const json=await res.json();
                alert("Todo Added");
            })
        }}>Add Todo</button>
    </div>
}