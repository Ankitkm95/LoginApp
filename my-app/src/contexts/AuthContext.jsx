import { createContext, useState } from "react";

export const authContext = createContext();

const AuthcontextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
        setIsAuth(true)
    }
    const logout = () => {
        setIsAuth(false)
    }
    console.log(isAuth)
    return <authContext.Provider value={{isAuth, login, logout}}>{children}</authContext.Provider>
}

export default AuthcontextProvider;