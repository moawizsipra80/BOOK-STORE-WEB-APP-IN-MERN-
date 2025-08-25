import express from "express";
import { Book } from "../models/bookModels.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
// Static folder serve karo
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    const uploadPath = path.join(__dirname, "../uploads"); // uploads folder ko backend ke andar rakho
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // folder auto-create ho jaye
    }
    cb(null, uploadPath);
  },
  filename: (request, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Save a new book
router.post("/", upload.single("image"), async (request, response) => {
    try {
    console.log(request.body);
    console.log("File",request.file);
    if (!request.body.title || !request.body.author || !request.body.publishYear) {
      return response.status(400).send({
        message: "All fields are required",
      });
    }

    const newbook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      description: request.body.description,
      stock: request.body.stock,
      price: request.body.price,
      image: request.file ? `/uploads/${request.file.filename}` : null,

    };

    const book = new Book.create(newbook);
    response.status(201).send(book);
  } catch (error) {
    console.error(error.message);
    return response.status(500).send(error.message);
  }
});
router.get("/", async (request, response) => {
  try {
 const books=await Book.find({});

const booksWithImageUrls = books.map(book => ({
      ...book._doc, // Spread the book document
      image: book.image ? `http://localhost:3000/images/${book.image}` : null
    }));
    console.log("Fetched books:", booksWithImageUrls); console.log(books);
 if(books.length===0 || !books){
      return response.status(404).send("No books found by search element");
    }
  response.json(books);
 
}
catch(error){
    response.status(500).send(error.message);
  }
});
router.get("/search", async (request, response) => {
  try {
    let filter = {};
    if (request.query.title) {
      // Partial match with case-insensitive option
      filter.title = { $regex: request.query.title, $options: "i" };
    }

    const books = await Book.find(filter);

    if (!books || books.length === 0) {
      return response.status(404).json({ message: "No books found matching the query" });
    }

    response.json(books);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
//placing order
router.post("/order",async(request,response)=>{
try{
  if(!request.body.fname ||!request.body.sname ||!request.body.contact ||!request.body.postalcode)
  {
  return response.status(400).send("All fields are required");
}
const neworder={
  fname:request.body.fname,
  sname:request.body.sname,
  contact:request.body.contact,
  address:request.body.address,
  postalcode:request.body.postalcode,
  nearestplace:request.body.nearestplace,
}
const neworder1=await Book.create(neworder);
response.status(201).send(neworder1);
} catch(error){
  response.status(400).send("Error while placing order",error.message);
}
});
//making route to get books by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params; 
    const book = await Book.findById(id);
     return response.status(200).json(book);
  } catch (error) {
    return response.status(404).send(error.message);
  }
});
//route to update a book
router.put("/:id", async (request, response) => {
  // Validate request body
  if (
    !request.body.title ||
    !request.body.author ||
    !request.body.publishYear
  ) {
    return response.status(400).send({ message: "All fields are required" });
  }

  const { id } = request.params;

  try {
    const result = await Book.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book Updated Successfully" });
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});
// DELETE request /books/:id
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id); // MongoDB me delete karta hai

    if (!result) {
      return response.status(500).send({ message: "Book not found by id and delete function" });
    }

    return response
      .status(200)
      .send({ message: "Book found by id and delete successfully" });
  } catch (error) {
    return response.status(400).send(error.message);
  }
});
export default router;