import { useContext, useState } from "react";
import {useNavigate, Navigate} from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
// import { Navigate } from "react-router-dom";

const initState = {
    name: "",
    phoneNo: ""
}

const userDatas = [
    {
        name: "Ankit",
        phoneNo: "8340437327"
    },
    {
        name: "Rahul",
        phoneNo: "8340437328"
    }
]

const Login = () => {
    const [data, setData] = useState(initState);
    const {name, phoneNo} = data;
    // const navigate = useNavigate();
    const {isAuth, login}  = useContext(authContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prev => ({...prev, [name]: value}))
    }
    console.log(isAuth)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)

        if(name && phoneNo){
            let isDataCorrect = userDatas.find(el => (el.name === name && el.phoneNo === phoneNo));

            if(isDataCorrect){
                login();
                // navigate("/")
            }else{
                alert("incorrect credientials")
            }
        }else{
            alert("please fill all the fields")
        }
    };

    if(isAuth){
        return <Navigate to="/" />
    }

    return (
        <div>
            

            <h1>Login Here</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" />
                </div>
                <div>
                    <input type="text" name="phoneNo" value={phoneNo} onChange={handleChange} placeholder="Phone No" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login;