import {atom} from 'recoil'
import {selector} from 'recoil'
export const mynetworkAtom=atom({
    key:"mynetworkAtom",
    default:105
})

export const jobsAtom=atom({
    key:"jobsAtom",
    default:0
})

export const messagingAtom=atom({
    key:"messagingAtom",
    default:0
})

export const notificationAtom=atom({
    key:"notificationAtom",
    default:15
})

export const totalSelector=selector({
    key:"totalSelector",
    get:({get})=>{
        const val1=get(mynetworkAtom);
        const val2=get(jobsAtom);
        const val3=get(messagingAtom);
        const val4=get(notificationAtom);
        return val1+val2+val3+val4;
    }
})