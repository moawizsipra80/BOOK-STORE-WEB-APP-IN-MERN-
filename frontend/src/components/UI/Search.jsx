import { memo } from 'react';
import { FaSearch } from 'react-icons/fa';
const Search = () => {
  return (
<div className="flex items-center space-x-2">
          <FaSearch size={20} color="purple-400" />
          <input
            type="text"
            placeholder="Search for book..."
            className="px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>
)
};
export default memo(Search);