import { useLoaderData } from "react-router-dom";
import UpcomingBooks from "../Component/UpcomingBooks";


const UpComing = () => {
    const books = useLoaderData();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-9 p-2">
            {
                JSON.parse(books)?.map(book => <UpcomingBooks key={book.book_name} book={book}></UpcomingBooks>)
            }
        </div>
    );
};

export default UpComing;