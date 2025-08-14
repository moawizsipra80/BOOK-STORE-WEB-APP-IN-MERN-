import { memo } from 'react';
import { FaSearch,  FaBookOpen } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
const Search = () => {
  return (
    <div className="flex items-center space-x-2">
      <FaSearch size={20} color="purple" />
      <input
        type="text"
        placeholder="Search for book..."
        className="px-4 py-1 rounded-md focus:outline-black focus:ring-2 focus:ring-purple-300"
      />
      {/* <FaBookOpen size={20} color="purple" />
      <input
        type="text"
        placeholder="Enter book author"
        className="px-4 py-1 rounded-md focus:outline-black focus:ring-3 focus:ring-purple-300"
      />
           <FaUser size={20} color="purple" />
       */}
      {/* <input
        type="text"
        placeholder="Enter book publish year"
        className="px-4 py-1 rounded-md focus:outline-black focus:ring-3 focus:ring-purple-300"
      /> */}
      {/* <div><br/>
        <input
        type="text"
        placeholder="Enter book publish Description"
        className="px-4 py-1 rounded-md focus:outline-black focus:ring-3 focus:ring-purple-300"
      /> */}
      {/* </div><br/>
      <div>
        <input
        type="number"
        placeholder="Enter stock"
        className="px-4 py-1 rounded-md focus:outline-black focus:ring-3 focus:ring-purple-300"
      />
      </div> */}
    </div>
  );
};

export default memo(Search);
