import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-8">
                    <NavLink to='/' className={({isActive})=>isActive?'text-green-400 ':''}>Home</NavLink>
                    <NavLink to='/listedBook' className={({isActive})=>isActive?'text-green-400  ':''}>Listed Books</NavLink>
                    <NavLink to='/pagesRead' className={({isActive})=>isActive?'text-green-400  ':''}>Pages to Read</NavLink>
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn bg-[#66e053] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] ml-3 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;