import { useEffect, useState } from "react";
import { getWishlistBook } from "../Utility";
import WishlistBook from "../Component/WishlistBook";

const WishList = () => {

    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(()=>{
        const storeWishBook = getWishlistBook();
        setWishlistBooks(storeWishBook);
    },[])
    console.log(wishlistBooks);

    return (
        <div>
            {
                wishlistBooks.map(book=><WishlistBook key={book.bookID} book={book}></WishlistBook>)
            }
        </div>
    );
};

export default WishList;