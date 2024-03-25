import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";

const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;