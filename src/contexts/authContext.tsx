import { ComponentElement, createContext, ReactComponentElement, ReactNode, useCallback, useContext, useState } from "react";

import { api } from "../services/api";


interface User{
    email: string;
    id: string;
    name: string;
}

interface AuthState{
    accessToken: string;
    user: User
}



interface AuthProvaiderProps {
    children: ReactNode;
}

interface login {
    email: string;
    password: string;
}

interface AuthContextDate{
    user: User;
    accessToken: string;
    login: (Credential: login) => Promise<void>;
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate)

const useAuth = ()=>{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}

const AuthProvaider = ({children}: AuthProvaiderProps) => {

    const [data, setData] = useState<AuthState>(()=>{
        const accessToken = localStorage.getItem("@Do-it:accessToken")
        const user = localStorage.getItem("@Do-it:user")

        if(accessToken && user){
            return{accessToken, user: JSON.parse(user)}
        }

        return {} as AuthState
    })

    const login = useCallback(async({email, password}:login)=>{
        const response = await api.post("/login", {email, password})
        const {accessToken, user } = response.data

        localStorage.setItem("@Do-it:accessToken", accessToken)
        localStorage.setItem("@Do-it:user", JSON.stringify(user))

        setData({accessToken,user}); 
    },[])

    return(
        <AuthContext.Provider value={{
            login,
            user: data.user,
            accessToken: data.accessToken
        }}>{children}</AuthContext.Provider>
    )
}

export { AuthProvaider, useAuth };
