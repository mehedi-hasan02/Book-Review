import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";

const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;