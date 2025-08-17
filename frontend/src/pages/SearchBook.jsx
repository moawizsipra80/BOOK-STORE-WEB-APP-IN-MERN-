import { memo,useState,useEffect} from "react";
import Search from "../components/UI/Search.jsx";
import Button from "../components/UI/Button.jsx";
const CreateBook = () => {
const [book,setbook]=useState([]);
useEffect(() => {
    fetch("http://localhost:3000/api/books", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setbook(data); 
      })
      .catch((error) => {
        console.error("Error fetching:", error.message);
      });
  }, []);
  const handleSearch=()=>{
    conosle.log("Search button is clicked");
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

   
        <div className="flex flex-col  items-center justify-center ">
          <Search
            placeholder="Search for book..."
            className="flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={CreateBook}
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Enter
          </Button>
        </div>
      </div>
    <div className='flex justify-center gap-6 flex-wrap'>
     {book.map((book,index)=>(
    <div  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-40 hover:shadow-2xl transition">
      <div key={index} className='text-purple-500 mb-2'>{book.title}</div>
        <div className='text-purple-400 font-semibold'>{book.author}</div>
        <div className='text-purple-400 font-semibold'>{book.description}</div>
          <div className='text-purple-400 font-semibold'>{book.image}</div>
    </div>
      ) )}
 </div>
 
    </section>
 
);
};

export default memo(CreateBook);
