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
    const isExits = books.find(b => b.id === book.id);
    if(isExits)
    {
        return toast.error('Already Added');
    }
    books.push(book);
    localStorage.setItem('readBook', JSON.stringify(books));
    toast.success("Added Successful");
}