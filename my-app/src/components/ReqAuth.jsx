import { useContext } from "react"
import { authContext } from "../contexts/AuthContext"
import {Navigate} from "react-router-dom";

const ReqAuth = ({children}) => {
    const {isAuth}  = useContext(authContext);

    console.log("Sd", isAuth)

    if(!isAuth){
        return <Navigate to="/login" />
    }

    return children;
}

export default ReqAuth;