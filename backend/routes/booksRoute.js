import express from "express";
import { Book } from "../models/bookModels.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

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
      image: request.file ? request.file.filename : null,
    };

    const book = await Book.create(newbook);
    response.status(201).send(book);
  } catch (error) {
    console.error(error.message);
    return response.status(500).send(error.message);
  }
});
//making route to get all books from database
// router.get("/", async (request, response) => {
//   try {
//     let filter={};
    
//     if(request.query.title){

//       filter.title=new RegExp(request.query.title,"i");
//     }
//     const books= await Book.find(filter);
//     if(books.length===0 || !books){
//       return response.status(404).send("No books found by search element");
//     }
//     response.json(books); 
//   } catch (error) {
//     return response.status(500).send(error.message);
//   }
// });
router.get("/", async (request, response) => {
  try {
 const books=await Book.find({});
 if(books.length===0 || !books){
      return response.status(404).send("No books found by search element");
    }
  response.json(books);
 
}
catch(error){
    response.status(500).send(error.message);
  }
});
//search route
router.get("/search", async (request, response) => {
try{
let filter={};
if(request.query.filter){
  filter.title=new RegExp(request.query.title,"i");
}
const book= await Book.findOne(filter)
if(!book){
  response.status(404).send("No books found by search  element");
}
response.json(book);
}
catch(error){
  response.status(500).status(error.message)
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