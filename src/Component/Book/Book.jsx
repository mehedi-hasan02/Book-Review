const Book = ({book}) => {
    const {bookName,author,image,review,tags,rating,} = book;
    return (
        <div className="card border border-[#d1cfcf] flex flex-col">
            <div>
            <figure><img src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body flex-grow">
                <h2 className="card-title">{bookName}</h2>
                <p>By {author}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;