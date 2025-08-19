import { memo,useState,useEffect} from "react";
import Search from "../components/UI/Search.jsx";
import Button from "../components/UI/Button.jsx";
import axios from 'axios';
const CreateBook = () => {
const [book,setbook]=useState([]);
const [search,setsearch]=useState(null);//Api se data call hoga kiom kah ye ail object ha 
const [searchtext,setsearchtext]=useState("");
useEffect(() => {
    fetch("http://localhost:3000/api/books", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setbook(data);//object ban jayga 
      })
      .catch((error) => {
        console.error("Error fetching:", error.message);
      });
  }, []);
const handleSearch = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/books?title=${searchtext}`);
    console.log("Search response:", response.data); 
    setsearch(response.data);
  } catch (err) {
    console.error(err);
  }
};

  const handlekeyDown=async (e)=>
    {
if(e.key==="Enter")
{
  handleSearch();
}
}

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

    {/* search bar */}
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

    {/* grey line */}
    <div className="border-t border-gray-400 my-10"></div>


<div className='flex justify-center gap-6 flex-wrap border-t border-gray-300 mt-10 pt-10'>
  {search && (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-60 hover:shadow-2xl transition">
      <div className="text-purple-500 mb-2">
        {Array.isArray(search) ? search[0]?.title : search.title}
      </div>
      <div className="text-purple-400 font-semibold">
        {Array.isArray(search) ? search[0]?.author : search.author}
      </div>
      <div className="text-purple-400 font-semibold">
        {Array.isArray(search) ? search[0]?.description : search.description}
      </div>
      <div className="text-purple-400 font-semibold">
        {Array.isArray(search) ? search[0]?.image : search.image}
      </div>
    </div>
  )}
</div>


    {/* all books */}
    <div className="flex justify-center gap-6 flex-wrap">
      {book.map((book, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-40 hover:shadow-2xl transition"
        >
          <div className="text-purple-500 mb-2">{book.title}</div>
          <div className="text-purple-400 font-semibold">{book.author}</div>
          <div className="text-purple-400 font-semibold">{book.description}</div>
        </div>
      ))}
    </div>
  </div>
</section>

 
);
};

export default memo(CreateBook);
