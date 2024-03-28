const UpcomingBooks = ({ book }) => {
    const { book_name, author_name, total_pages, publish_date, image_url, category } = book;
    return (
        <div
            className="card border border-[#d1cfcf] flex flex-col p-3">

            <div className="bg-[#1313130D] p-3 rounded-xl min-h-[250px] w-full flex justify-center items-center">
                <figure className="w-full"><img src={image_url} className="h-[300px] w-full bg-cover" /></figure>
            </div>
            <div className="text-center mt-2">
                <h3 className="text-xl font-bold">Upcoming...</h3>
            </div>
            <div className=" flex-grow p-3 space-y-3">
                <h2 className="card-title whitespace-nowrap">{book_name}</h2>
                <p>By {author_name}</p>
                <hr />
                <div className="card-actions justify-between">
                    <p>{category}</p>
                    <p className="flex justify-center items-center gap-3">{publish_date}</p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingBooks;