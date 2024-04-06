import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ReqAuth from "../components/ReqAuth";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<ReqAuth><Home /></ReqAuth>} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="" element={<ReqAuth><Home /></ReqAuth>} /> */}
    </Routes>
};

export default AllRoutes;