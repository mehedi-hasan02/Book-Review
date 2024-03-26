import {  useState } from "react";
import { Link, Outlet } from "react-router-dom";


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);

    // console.log(readBooks);
    return (
        <div className="">
            <div className="bg-[#1313130D] text-center p-8 rounded-xl">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            <div className="text-center mt-5 lg:mt-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] px-8">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><Link>Rating</Link></li>
                        <li><Link>Number of Pages</Link></li>
                        <li><Link>Publish Year</Link></li>
                    </ul>
                </details>
            </div>

            {/* tab */}
            <div className="flex p-2 lg:-mx-4 overflow-x-auto overflow-y-hidden flex-nowrap  dark:text-gray-800">
                <Link
                    to = ''
                    onClick={()=>setTabIndex(0)}
                rel="noopener noreferrer"  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-600`}>
                    
                    <span>Read Books</span>
                </Link>
                <Link 
                    to='wishList'
                    onClick={()=>setTabIndex(1)}
                rel="noopener noreferrer"  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b lg:w-full'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default ListedBook;