import { useEffect, useState } from "react";
import { getBooks } from "../Utility";
import ReadedBook from "./ReadedBook";

const ReadBook = () => {

    const [readBooks, setReadBooks] = useState([]);

    useEffect(()=>{
        const storeBook = getBooks();
        setReadBooks(storeBook);
    },[])

    return (
        <div className="p-2 lg:p-0">
            {
                readBooks.map(book=><ReadedBook key={book.bookID} book={book}></ReadedBook>)
            }
        </div>
    );
};

export default ReadBook;