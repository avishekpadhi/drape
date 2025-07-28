import { GenderFilter } from "./GenderFilter";
import { ColourFilter } from "./ColourFilter";
import CurrentFilter from "./CurrentFilter";
import { useFilter } from "../../context/FilterContext";

const Filter = () => {
  const {
    selectedColour,
    selectedGender,
    setSelectedColour,
    setSelectedGender,
  } = useFilter();

  const clearFilters = () => {
    setSelectedColour("");
    setSelectedGender("");
  };

  const hasFilters = selectedColour !== "" || selectedGender !== "";

  return (
    <>
      <div className="mt-10">
        <span className="font-semibold text-lg">Filters</span>
      </div>
      {hasFilters && (
        <>
          <span
            id="badge-dismiss-default"
            className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-primary-foreground bg-primary rounded-sm dark:bg-primary dark:text-primary-foreground cursor-pointer"
            onClick={clearFilters}
          >
            Remove Filters
            <button
              type="button"
              className="inline-flex items-center p-1 ms-2 text-sm text-primary-foreground bg-transparent rounded-sm hover:bg-primary/80 hover:text-white dark:hover:bg-primary/70 dark:hover:text-white"
              data-dismiss-target="#badge-dismiss-default"
              aria-label="Remove"
            >
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Remove badge</span>
            </button>
          </span>
        </>
      )}
      <div className="mt-5">
        <GenderFilter />
      </div>
      <div className="mt-5 h-64 overflow-y-auto">
        <ColourFilter />
      </div>
    </>
  );
};

export default Filter;
