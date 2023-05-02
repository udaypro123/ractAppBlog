import { createContext, useState } from "react";


export const authcontext=createContext()


function ContextProvider({children}){

    const [islogin,setislogin]=useState(false)
    const [inputvalue,setinputvalue]=useState("")
    const [password,setpassword]=useState("")

    return <authcontext.Provider value={{islogin,setislogin,password,setpassword,inputvalue,setinputvalue}}>
        {children}
    </authcontext.Provider>
}

export default ContextProvider;