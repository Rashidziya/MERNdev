import {atomFamily,selectorFamily} from 'recoil'
import axios from 'axios'
export const todoAtomFamily=atomFamily({
    key:"todoAtomFamily",
    default:selectorFamily({
        key:"todoSelectorFamily",
        get:(id)=>async ({get})=>{
            await new Promise (r=>setTimeout(r,5000))
            const response=await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return response.data.todo;
        }
    })
})
