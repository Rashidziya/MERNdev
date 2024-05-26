import {atomFamily,selectorFamily} from 'recoil'
import axios from 'axios'

// let say up untill now what we did "ki" ,we have been maintaining 
// in-memory TODO'S. for which we were taking id as input and searching 
// in the in-local stord memory if the todo with particular id is present/
// then we would be like return the particular atom to the component which
// requested through atomFamily....

// Now,let's say we have to fetch the atom from the backend.in this case we have
// to hit the todo backend and match the id then return it to the component .
// which does require the specific todo with specific id it requested for.

// Now we know that "ki", fetch call is asynchronous task and atom / atomFamily can't 
// handle the async call . as it can only store the value,...So to do the backend fetch
// and return the specific todo.we need to use the selectorFamily jsut like the 
// selector we had used for fetching the single atom from the backend.

export const todoatomFamily=atomFamily({
    key:"todoatomFamily",
    default:selectorFamily({
        key:"todoselectorFamily",
        get:(id)=>async ({get})=>{
            const res=await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        },
    })
});