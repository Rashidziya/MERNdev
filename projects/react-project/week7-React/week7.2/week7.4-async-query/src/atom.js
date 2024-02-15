import axios from "axios";
import { atom, selector } from "recoil";


// if you know "ki" atoms/state variable initial value is depenedent upon 
// some async call / fetch  then we have to do it like using selector in atoms default
// value. because the atom default value cannot be an async call .whereas the selector 
// can have like async call because it has get function . and by using selector 
// we can simply put the value in atom in recoil.
export const notifications = atom({
    key: "networkAtom",
    default:selector({
        key:"networkAtomSelector",
        get: async ()=>{
            const res= await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})