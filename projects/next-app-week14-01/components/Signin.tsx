import Button from "./Button";

export const SigninComponent=()=>{
    return <div>
         <div className='h-screen flex flex-col justify-center '>
            <div className='flex justify-center'>
                <div className='w-48 flex flex-col justify-center items-center shadow shadow-slate-400 rounded-sm  '>
                    <h2 className='text-2xl font-bold mt-4'>Sign in</h2>
                    <LabledInput name="username" placeholder="Enter your username" />
                    <LabledInput name="password" placeholder="123465" />
                    <Button/>
                </div>
            </div>
        </div>
    </div>
}

interface inputType{
    name:string;
    placeholder:string;
   
}
const LabledInput=({name,placeholder}:inputType)=>{
    return <div className='flex flex-col  px-4 mt-4'>
                
        <label className="block  text-sm font-bold text-gray-900 ">{name}</label>
        <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}/>
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400"></p>

    </div>
}