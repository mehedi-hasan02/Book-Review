import toast from "react-hot-toast";

export const getBooks = () =>{
    let books = [];
    const storeBooks = localStorage.getItem('blogs');
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
        return toast.error('Already Bookmarked');
    }
    books.push(book);
    localStorage.setItem('blogs', JSON.stringify(books));
    toast.success("Blog Bookmark Successful");
}

export const deleteBooks = id =>{
    let books = getBooks();
    const remaining = books.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog remove successFul');
}