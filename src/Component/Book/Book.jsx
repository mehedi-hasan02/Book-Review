import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
    const { bookId,bookName, author, image, review, tags, rating,category } = book;
    
    return (
        <Link className="card border border-[#d1cfcf] flex flex-col p-3">
            <div className="bg-[#1313130D] p-3 rounded-xl min-h-[230px] flex justify-center items-center">
                <figure><img src={image} /></figure>
            </div>
            <div className=" flex-grow p-3 space-y-3">
                <div className="flex gap-5 mt-2 flex-grow ">
                    {
                        book.tags.map(tag=><p key={bookId} className="bg-[#17BE0A0D] rounded-full px-3 p-1 text-[#23BE0A] font-bold whitespace-nowrap">{tag}</p>)
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p>By {author}</p>
                <hr/>
                <div className="card-actions justify-between">
                    <p>{category}</p>
                    <p className="flex justify-center items-center gap-3">{rating} <FaRegStar></FaRegStar></p>
                </div>
            </div>
        </Link>
    );
};

export default Book;