

export default function signinLayout({
    children,
}:{children:React.ReactNode}){
    return <div>
        <div className="border-b text-center">
            login to get 50%. Hurry up Now
        </div>
        {children}
    </div>
}