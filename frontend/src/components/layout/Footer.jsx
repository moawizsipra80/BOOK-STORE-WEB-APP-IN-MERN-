import { memo } from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-300">
            We provide trending books from around the world with the best reading experience. 
            Your next favorite book is just a click away!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/books" className="hover:underline">Books</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">Email: info@odmonline.com</p>
          <p className="text-sm text-gray-300">Phone: +923140692389</p>
          <p className="text-sm text-gray-300">Address: Huse120 expocenter Lahore Pakistgan</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bookstore. All rights reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
