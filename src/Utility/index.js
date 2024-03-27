import toast from "react-hot-toast";

export const getBooks = () =>{
    let books = [];
    const storeBooks = localStorage.getItem('readBook');
    if(storeBooks)
    {
        books = JSON.parse(storeBooks);
    }
    return books;
}

export const saveBooks = (book) =>{
    let books = getBooks();
    const isExits = books.find(b => b.bookId === book.bookId);
    if(isExits)
    {
        return toast.error('Already Added');
    }
    books.push(book);
    localStorage.setItem('readBook', JSON.stringify(books));
    toast.success("Added Successful");
}

export const getWishlistBook = () =>{
    let wishBook = [];
    const storeWishBook = localStorage.getItem('wishlist');
    if(storeWishBook)
    {
        wishBook=JSON.parse(storeWishBook);
    }
    return wishBook;
}

export const saveWishBook = (wishlistBook) =>{
    let wishBook = getWishlistBook();
    let books = getBooks();

    const isReadExits = books.find(b => b.bookId === wishlistBook.bookId);
    const isWishExits = wishBook.find(b=>b.bookId === wishlistBook.bookId);

    if(isReadExits || isWishExits)
    {
        return toast.error('Already Added');
    }
    wishBook.push(wishlistBook);
    localStorage.setItem('wishlist', JSON.stringify(wishBook));
    toast.success("Add successFull");

}
