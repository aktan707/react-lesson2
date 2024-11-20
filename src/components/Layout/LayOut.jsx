import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";


const LayOut = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default LayOut;