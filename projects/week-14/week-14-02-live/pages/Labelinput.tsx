import { ChangeEventHandler } from "react";


// lable input will have label and the input box with palceholder...
interface LableinputType{
    lable:string;
    placeholder:string;
    onChange:ChangeEventHandler<HTMLInputElement>
}

export const Lableinput =({lable,placeholder,onChange}:LableinputType)=>{
    return <div className="mt-4">

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lable}</label>
        <input onChange={onChange} type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}/>

    </div>
}