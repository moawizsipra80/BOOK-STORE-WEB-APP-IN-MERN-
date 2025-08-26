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
    const uploadPath = path.join(__dirname, "../Uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
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
    console.log("File", request.file);
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
      image: request.file ? `/Uploads/${request.file.filename}` : null,
    };

    const book = await Book.create(newbook);
    response.status(201).send(book);
  } catch (error) {
    console.error(error.message);
    return response.status(500).send(error.message);
  }
});

// Get all books
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    const booksWithImageUrls = books.map(book => ({
      ...book._doc,
      image: book.image ? `http://localhost:3000${book.image}` : null // Use /Uploads directly
    }));
    console.log("Fetched books:", booksWithImageUrls);
    if (books.length === 0) {
      return response.status(404).send("No books found");
    }
    response.json(booksWithImageUrls);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

// Search books
router.get("/search", async (request, response) => {
  try {
    let filter = {};
    if (request.query.title) {
      filter.title = { $regex: request.query.title, $options: "i" };
    }

    const books = await Book.find(filter);
    const booksWithImageUrls = books.map(book => ({
      ...book._doc,
      image: book.image ? `http://localhost:3000${book.image}` : null // Add URL transformation
    }));

    if (!books || books.length === 0) {
      return response.status(404).json({ message: "No books found matching the query" });
    }

    response.json(booksWithImageUrls);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

// Get book by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    if (!book) {
      return response.status(404).send({ message: "Book not found" });
    }
    response.status(200).json({
      ...book._doc,
      image: book.image ? `http://localhost:3000${book.image}` : null
    });
  } catch (error) {
    return response.status(404).send(error.message);
  }
});

// Update a book
router.put("/:id", async (request, response) => {
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

// Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).send({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    return response.status(400).send(error.message);
  }
});

export default router;