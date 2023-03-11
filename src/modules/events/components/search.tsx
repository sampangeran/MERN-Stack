import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';

type SearchProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

const SearchInput: React.FC<SearchProps> = ({ placeholder = 'Search...', onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center gap-4 items-center mb-[20px]">
      <div className="relative rounded-full bg-white shadow-sm">
        <input
          type="text"
          className="w-[276px] md:w-[660px] py-2 px-8 rounded-full border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-50 bg-[#F3F3F3]"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button className="bg-[#5885E9] rounded-full p-3">
        <Search color="#fff" />
      </button>
    </div>
  );
};

export default SearchInput;
