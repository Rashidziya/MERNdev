import {atom,selector} from 'recoil'
import axios from 'axios'

// if you know "ki" atoms/state variable initial value is depenedent upon 
// some async call / fetch  then we have to do it like using selector in atoms default
// value. because the atom default value cannot be an async call .whereas the selector 
// can have like async call because it has get function . and by using selector 
// we can simply put the value in atom in recoil.
export const headerAtom=atom({
    key:"headerAtom",
    default:selector({
        key:"headerAtomSelector",
        get:async ()=>{
            // puts artificial delay of 5 sec... befor fetching data from the backend 
            // rendering the component in the dom .
            await new Promise(resolve=>setTimeout(resolve,5000));
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
});


// When you "ki" any Computation can be solely derived from any atoms
// then in those cases we should use the selector rather than "ki" we 
// do the computation using useMemo => waise using useMemo can be a good 
// as it re-Computes the data only when any of its dependencies changes
// But if you are using recoil then it is better to use the selector Here..! Thank You!
export const notificationsmeSelector=selector({
    key:"notificationsmeSelector",
    get:({get})=>{
        const getAtom=get(headerAtom);
        return getAtom.jobs+getAtom.network+
        getAtom.messaging+getAtom.notifications;
    }
});