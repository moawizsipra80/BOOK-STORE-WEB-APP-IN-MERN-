import { memo, useState } from 'react';
import {Link} from 'react-router-dom';
import Search from '../components/UI/Search';
import Button from '../components/UI/Button';
import { toast } from "react-toastify"; // ✅
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from 'react-icons/fa';
const  [title,settitle]=useState("");
const  [author,setauthor]=useState("");
const  [price,setprice]=useState("");
const  [description,setdescription]=useState("");
const  [image,setimaage]=useState("");
const Handlesubmit=()=>{
  const formData={
    title,
    author,
    publishYear,
    price,
    description,
    image,
  }

  fetch('http://localhost:5000/api/books',
  {
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(formData)

  })
  .then(response=>response.json())
  .then(()=>{
    toast.success('Book Added Successfully');

  })
  .catch(()=>{
    toast.error('Something Went Wring');
  })
}


const Addbook = () => {
  return (
    <section className="bg-gray-100 py-20">
  <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 gap-10">

    {/* Left side text */}
    <div className="md:w-1/2">
      <h1 className="text-7xl font-bold mb-4">Add Your Own Book</h1>
      <p className="text-lg text-gray-700 mb-6 ">
        Be the source of the best book provider for other users
      </p>
    </div>
 <br/><br/>
    {/* Right side form */}
    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md w-full flex flex-col gap-4">
      <FaSearch/>
      <input 
      
        type="text" 
        name="title" 
        placeholder="Enter Book Title" 
        className="w-full border border-gray-300 rounded px-4 py-2"
      />
      <input 
        type="text" 
        name="author" 
        placeholder="Author" 
        className="w-full border border-gray-300 rounded px-4 py-2"
      />
      <textarea 
        name="description" 
        placeholder="Description" 
        rows="3"
        className="w-full border border-gray-300 rounded px-4 py-2"
      />
      <input 
        type="number" 
        name="price" 
        placeholder="Price ($)" 
        className="w-full border border-gray-300 rounded px-4 py-2"
      />
       <input 
        type="number" 
        name="Stock" 
        placeholder="stock" 
        className="w-full border border-gray-300 rounded px-4 py-2"
      />
      <input 
        type="file" 
        name="image" 
        className="w-full border border-gray-300 rounded px-4 py-2"
      />
      <Button onClick={Handlesubmit}>Enter</Button>
    </div>

  </div>
</section>

  );
};

export default memo(Addbook);