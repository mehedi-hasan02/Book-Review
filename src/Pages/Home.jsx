import { Link, useLoaderData } from "react-router-dom";
import Book from "../Component/Book/Book";

const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <div className="card w-full mt-10 bg-[#1313130D]">
                <div className="flex p-20">
                    <div className="flex-1 ml-10 mt-14">
                        <h1 className="text-black text-3xl lg:text-5xl font-extrabold lg:leading-[80px] mb-5">Books to freshen up your bookshelf</h1>
                        <Link className="">
                            <button className="bg-[#23BE0A] px-6 py-3 rounded-xl text-white text-xl">View The List</button>
                        </Link>
                    </div>
                    <div className=" flex-1 flex justify-center items-center">
                        <img className="w-[300px]" src={books[0].image} alt="" />
                    </div>
                </div>
            </div>
            <div className="text-center text-4xl font-extrabold mt-20">
                <h1>Books</h1>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-9">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;