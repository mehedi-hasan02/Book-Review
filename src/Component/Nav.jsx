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
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Home</NavLink>
                        <NavLink to='/listedBook' className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Listed Books</NavLink>
                        <NavLink to='/pagesRead' className={({ isActive }) => isActive ? 'text-green-400 border  border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Pages to Read</NavLink>
                        <NavLink to='/upcoming' className={({ isActive }) => isActive ? 'text-green-400 border  border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Upcoming Book</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-400 border  border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Contact</NavLink>
                        
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl lg:text-3xl">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-8">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Home</NavLink>
                    <NavLink to='/listedBook' className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Listed Books</NavLink>
                    <NavLink to='/pagesRead' className={({ isActive }) => isActive ? 'text-green-400 border  border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Pages to Read</NavLink>
                    <NavLink to='/upcoming' className={({ isActive }) => isActive ? 'text-green-400 border  border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Upcoming Book</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-400 border  border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Contact</NavLink>
                    
                </ul>
            </div>
            <div className="lg:navbar-end hidden lg:flex">
                <a className="btn bg-[#66e053] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] ml-3 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;