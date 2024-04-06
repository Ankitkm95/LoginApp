import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
// import {Navigate} from "react-router-dom";

const Home = () => {
    const { logout}  = useContext(authContext);



    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;