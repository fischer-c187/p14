type SearchBarProps = {
  setSearch: (value: string) => void;
};

function SearchBar({ setSearch }: SearchBarProps) {
  return (
    <input
      type='text'
      placeholder='Search...'
      className='bg-glass bg-12-center bg-no-repeat h-10 px-5 pl-11 text-sm bg-white border-2 border-gray-300 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-citron-600 group-focus:focus:ring-citron-600'
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

export default SearchBar;
