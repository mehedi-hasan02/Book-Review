import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";

const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto min-h10 mt-3">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;