import { memo } from "react";
// import App from './App.jsx';
// import {Link} from 'react-router-dom';
// import Search from '../components/UI/Search';
import { FaSearch } from "react-icons/fa";
import Button from "../components/UI/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

const Addbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAauthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
 const [stock, setStock] = useState("");

  // const [image, setimage] = useState(null);
  const HandleSubmit = () => {
    const formData = { title, author, description, price, stock};
    console.log(formData);
    fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => toast.success("Book Added Successfully"))
      .catch(() => toast.error("Something Went Wrong"));
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 gap-10">
        <div className="md:w-1/2">
          <h1 className="text-7xl font-bold mb-4">Add Your Own Book</h1>
          <p className="text-lg text-gray-700 mb-6 ">
            Be the source of the best book provider for other users
          </p>
        </div>

        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md w-full flex flex-col gap-4">
          <FaSearch />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Enter Book Title"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            value={author}
            onChange={(e) => setAauthor(e.target.value)}
            type="text"
            name="author"
            placeholder="Author"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="Description"
            rows="3"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            name="price"
            placeholder="Price ($)"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="number"
            name="Stock"
            placeholder="stock"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          {/* <input
            value={image}
            onChange=type="file" onChange={e=>setImage(e.target.files[0])}
            type="file"
            name="image"
            className="w-full border border-gray-300 rounded px-4 py-2"
          /> */}
          <Button onClick={HandleSubmit}>Enter</Button>
        </div>
      </div>
    </section>
  );
};

export default memo(Addbook);
