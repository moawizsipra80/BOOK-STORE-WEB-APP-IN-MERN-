import express from "express";
import {Book} from "../models/bookModels.js"; 

const router = express.Router();


//save a  new book

router.post("/api/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "All fields are requires",
      });
    }
    const newbook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      description:request.body.description,
      stock:request.body.stock,
      image:request.body.image,
    };
    const book = await Book.create(newbook);
    response.status(201).send(book);
  } 
  catch (error)
   {
    console.log(error.message);
    return response.status(500).send(error.message);
  }
});

//making route to get all books from database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find();
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    return response.status(500).send(error.message);
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