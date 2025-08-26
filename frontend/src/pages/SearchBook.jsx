import { memo, useState, useEffect } from "react";
import Search from "../components/UI/Search.jsx";
import Button from "../components/UI/Button.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [books, setbooks] = useState([]);
  const [search, setsearch] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/books")
      .then((response) => {
        console.log("Books Response:", response.data);
        setbooks(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/books/search?title=${searchtext}`
      );
      console.log("Search response:", response.data);
      setsearch(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  const handlekeyDown = async (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const buy = (bookID) => {
    navigate(`/buynow/${bookID}`);
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <header className="text-center md:text-left mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Search Book
          </h1>
          <p className="text-lg text-gray-600">
            Find the book you want to read by entering its name below.
          </p>
        </header>

        {/* Search bar */}
        <div className="flex flex-col items-center justify-center">
          <Search
            placeholder="Search for book..."
            className="flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
            onKeyDown={handlekeyDown}
          />
          <Button
            onClick={handleSearch}
            type="submit"
            className="px-5 py-2 mt-3 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Enter
          </Button>
        </div>

        {/* Grey line */}
        <div className="border-t border-gray-400 my-10"></div>

        {/* Search results */}
        {Array.isArray(search) && search.length > 0 ? (
          <div className="flex justify-center gap-6 flex-wrap">
            {search.map((book, index) => (
              <div
                key={book._id || index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-60 hover:shadow-2xl transition"
              >
                <img
                  src={book.image || '/default-book.jpg'} // Use full URL or fallback
                  alt={book.title}
                  className="w-32 h-48 object-cover mb-4 rounded"
                  onError={() => console.log(`Image failed to load: ${book.image}`)}
                />
                <div className="text-purple-500 mb-2">{book.title}</div>
                <div className="text-purple-400 font-semibold">
                  Author: {book.author}
                </div>
                <div className="text-purple-400 font-semibold">
                  {book.description || "No description available"}
                </div>
                <div className="text-purple-400 font-semibold">
                  Price: ${book.price ? book.price.toFixed(2) : "N/A"}
                </div>
                <div className="text-purple-400 font-semibold">
                  Stock: {book.stock ?? "N/A"}
                </div>
                <Button onClick={() => buy(book._id)}>Buy Now</Button>
              </div>
            ))}
          </div>
        ) : (
          search.length === 0 &&
          searchtext && (
            <p className="text-gray-500 text-center">No books found</p>
          )
        )}

        {/* All books */}
        <div className="flex justify-center gap-6 flex-wrap">
          {Array.isArray(books) && books.length > 0 ? (
            books.map((book, index) => (
              <div
                key={book._id || index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-60 hover:shadow-2xl transition"
              >
                <img
                  src={book.image || '/default-book.jpg'} // Use full URL or fallback
                  alt={book.title}
                  className="w-32 h-48 object-cover mb-4 rounded"
                  onError={() => console.log(`Image failed to load: ${book.image}`)}
                />
                <div className="text-purple-500 mb-2 font-bold">
                  {book.title}
                </div>
                <div className="text-purple-400 font-semibold">
                  Author: {book.author}
                </div>
                <div className="text-purple-400 font-semibold">
                  Description: {book.description || "No description available"}
                </div>
                <div className="text-purple-400 font-semibold">
                  Price: ${book.price ? book.price.toFixed(2) : "N/A"}
                </div>
                <div className="text-purple-400 font-semibold">
                  Stock: {book.stock ?? "N/A"}
                </div>
                <Button onClick={() => buy(book._id)}>Buy Now</Button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No books available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(CreateBook);