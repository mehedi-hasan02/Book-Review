import { useEffect, useState } from "react";
import { getBooks } from "../Utility";
import ReadedBook from "./ReadedBook";

const ReadBook = ({readBooks}) => {

    

    return (
        <div className="p-2 lg:p-0">
            {
                readBooks.map(book=><ReadedBook key={book.bookID} book={book}></ReadedBook>)
            }
        </div>
    );
};

export default ReadBook;