import { memo, useState, useEffect } from 'react';
import booksapi from '../../api/booksapi';
import {motion} from 'framer-motion';
const GoogleMap = () => {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    booksapi().then((data) => {
      console.log("API Response:", data);
      setUserdata(data.items || []); // sirf array store kar rahe hain
    });
  }, []);

  return (
  <div className="google flex flex-col items-center justify-between">
  <h2 className="g text-4xl font-bold py-10">Our Trending Books</h2>

  <div className="google-map grid grid-cols-3 gap-6 p-6">
    {userdata.length > 0 ? (
      userdata.map((e, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-purple-200 rounded-lg shadow-md hover:shadow-xl overflow-hidden w-60"
        >
          {/* Book Image */}
          <img
            src={e.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
            alt="Book"
            className="w-full h-72 object-cover"
          />

          {/* Book Info */}
          <div className="p-4">
            <h3 className="font-bold text-lg truncate">{e.volumeInfo.title}</h3>
            <p className="text-sm text-gray-700">
              {e.volumeInfo.authors?.join(", ") || "Unknown Author"}
            </p>
          </div>
        </motion.div>
      ))
    ) : (
      <p>No data here</p>
    )}
  </div>
</div>
  );
};

export default memo(GoogleMap);
