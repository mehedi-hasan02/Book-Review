import { CiLocationOn,CiUser } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";
const ReadedBook = ({book}) => {
    const {image,bookName,author,tags,publisher,totalPages,category,yearOfPublishing,rating} = book;
    console.log(book);
    return (
        <div className="flex border mt-8 p-6 rounded-xl gap-6">
            <div className="bg-[#1313130D] p-12 rounded-xl">
                <img src={image} alt="" />
            </div>
            <div className="flex-1 space-y-5">
                <div>
                <h3 className="text-2xl font-bold">{bookName}</h3>
                </div>
                <div>
                <p>By: {author}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-4 items-center">
                        <p className="font-bold">Tag</p>
                        {
                            tags.map(tag=><p className="bg-[#17BE0A0D] rounded-full px-4 p-1 text-[#23BE0A]" key={tag}>#{tag}</p>)
                        }
                    </div>
                    <div>
                        <p className="flex items-center"><CiLocationOn/> Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex gap-4 mb-5">
                    <p className="flex items-center gap-2"><CiUser/> Publisher: {publisher}</p>
                    <p className="flex items-center gap-2"><MdMenuBook/> Page {totalPages}</p>
                </div>
                <hr className="mb-6"/>
                <div className="flex gap-3 mt-6">
                    <p className="p-3 rounded-full bg-[#ecf2fa] text-[#328EFF] px-5">Category: {category}</p>
                    <p className="p-3 rounded-full bg-[#fdf6ec] text-[#FFAC33] px-5">Rating: {rating}</p>
                    <Link className="bg-[#23BE0A] p-3 rounded-full px-5 text-white">View Details</Link>
                </div>


            </div>
        </div>
    );
};

export default ReadedBook;