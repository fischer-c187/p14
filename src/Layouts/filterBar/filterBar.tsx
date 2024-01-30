import Dropdown from "@components/Dropdown/Dropdown";
import SearchBar from "@components/SearchBar/searchBar";
import { Option, Options } from "../../Types/dropdown";

type FilterBarProps = {
  entriesChoices: Options;
  setEntriesChoices: (value: number) => void;
  optionPreSelected: Option;
  setSearch: (value: string) => void;
};

function FilterBar({
  entriesChoices,
  setEntriesChoices,
  optionPreSelected,
  setSearch,
}: FilterBarProps) {
  return (
    <div className='px-4 flex justify-between'>
      <div className='max-w-64 w-fit'>
        <Dropdown
          options={entriesChoices}
          name='nbrEntries'
          optionPreSelected={optionPreSelected}
          onChange={(value) => setEntriesChoices(Number(value))}
          classNameBtn='text-gray-900 font-medium'
        />
      </div>

      <SearchBar setSearch={setSearch} />
    </div>
  );
}

export default FilterBar;
