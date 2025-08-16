import { memo } from "react";
import Search from "../components/UI/Search.jsx";
import Button from "../components/UI/Button.jsx";

const CreateBook = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title + Subtitle */}
        <header className="text-center md:text-left mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Search Book
          </h1>
          <p className="text-lg text-gray-600">
            Find the book you want to read by entering its name below.
          </p>
        </header>

        {/* Search + Button in one row */}
        <div className="flex flex-col  items-center justify-end  ">
          <Search
            placeholder="Search for book..."
            className="flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Enter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(CreateBook);
