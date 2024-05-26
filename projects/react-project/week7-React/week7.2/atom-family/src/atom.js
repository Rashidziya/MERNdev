import {atomFamily} from 'recoil'
import { TODO } from './todo'
// in simple words atomFamily is basically a function which gives you particular 
// atom based on the some input variable, let say an atomFamily has 10 individual atoms
// and if you give the atomFamily input of any specific atom then it will  going to 
// return you that specific atom irrespective of that "ki" from which componenet you are
// giving the request and how many times you are requesting for that atom.
// Every time this atomFamily function will going to return you the same atom...

export const todoAtomFamily=atomFamily({
    key:"todoAtomFamily",
    default:(id)=>{
        return TODO.find(x=>x.id===id);
    }
});

// here ,as we know up untill now "ki" atomFamily basically takes an input parameter
// and based on that input parameter it checks the particular atom based on the input.
// in this case a todo with particular (id) is matched and if there exist some todo
// with the same id as input parameter it will returning that particular todo as 
// an atom.

// what is todo here, it is nothing but an atom. which may be required from 
// some component based on it's id only .it may be specific to some other 
// component as well then in that case tthis  will be going to a state/atom 
// for that specific component only. 