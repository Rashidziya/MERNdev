import {atom, selector} from 'recoil';

export const countAtom=atom({
    key:"countAtom",
    default:0,
});

// creating a selector :- when to have a selector up untill now i have understood that 
// "ki" when you know that a component is solely can be derived from a partiular state,
// in that case it is better in recoil to use selector.

// more easy -> A component is only depends upon some A,b,c Atom/state in recoil
// then in that case it is good to use selector.As the selector make that particular 
// component to re-render only when the selector has changed/updated.

export const evenSelector=selector({
    key:"evenSelector",
    get:({get})=>{
        const isEven=get(countAtom);
        return isEven%2==0;
    }
})

