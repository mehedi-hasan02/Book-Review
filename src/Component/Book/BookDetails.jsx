import { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import { saveBooks, saveWishBook } from "../../Utility";


const BookDetails = () => {
    const { bookId } = useParams();

    const [books, setBooks] = useState([]);
    const [singleBook, setSingleBook] = useState(null);

    //need to sort singleBook

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch('/fakeData.json')
            const data = await res.json();
            setBooks(data);
        }
        fetchBooks()
    }, []);

    useEffect(() => {
        const foundBook = books.find(sBook => sBook.bookId === parseInt(bookId));
        setSingleBook(foundBook);
    }, [bookId, books]);

    if (!singleBook) {
        return <div>Loading...</div>;
    }

    const handelStoreBook =singleBook=>{
        saveBooks(singleBook);
    }

    const handelStoreWishlist = singleBook =>{
        saveWishBook(singleBook);
    }

    return (
        <section>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between gap-12">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0   flex-1 bg-[#1313130D] rounded-xl">
                    <img src={singleBook.image} alt="" className="object-contain  h-full" />
                </div>
                <div className="flex flex-col rounded-sm  flex-1 space-y-4">
                    <h1 className=" leading-none text-4xl font-bold">{singleBook.bookName}</h1>
                    <p className="text-lg">By: {singleBook.author}</p>
                    <hr />
                    <p>{singleBook.category}</p>
                    <hr />
                    <p><span className="font-bold">Review:</span> {singleBook.review}</p>
                    <div className="flex gap-3 items-center">
                        <p className="font-bold">Tag</p>
                        {
                            singleBook.tags.map(tag => <p key={bookId} className="bg-[#17BE0A0D] rounded-full px-3 p-1 text-[#23BE0A] font-bold whitespace-nowrap">{tag}</p>)
                        }
                    </div>
                    <hr />
                    <div className="space-y-3">
                        <div className="flex gap-9">
                            <p>Number of pages: </p>
                            <p className="font-semibold">{singleBook.totalPages}</p>
                        </div>
                        <div className="flex gap-24">
                            <p>Publisher: </p>
                            <p className="font-semibold">{singleBook.publisher}</p>
                        </div>
                        <div className="flex gap-8">
                            <p>Year of publishing: </p>
                            <p className="font-semibold">{singleBook.yearOfPublishing}</p>
                        </div>
                        <div className="flex gap-[118px]">
                            <p>Rating: </p>
                            <p className="font-semibold">{singleBook.rating}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-24 text-center">
                        <Link onClick={()=>handelStoreBook(singleBook)} rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Read</Link>
                        <Link onClick={()=>handelStoreWishlist(singleBook)} rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold rounded bg-[#50B1C9] dark:text-gray-50">Wishlist</Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default BookDetails;
