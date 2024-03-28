import { useLoaderData } from "react-router-dom";
import UpcomingBooks from "../Component/UpcomingBooks";


const UpComing = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            <div className="text-center text-4xl font-extrabold mt-8 lg:mt-20">
                <h1>Books</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-9 p-2">
                {
                    books.map(book => <UpcomingBooks key={book.book_name} book={book}></UpcomingBooks>)
                }
            </div>
        </div>

    );
};

export default UpComing;