import { GenderFilter } from "./GenderFilter";
import { ColourFilter } from "./ColourFilter";
// import CurrentFilter from "./CurrentFilter";
import { useFilter } from "../../context/FilterContext";
import { Button } from "../ui/Button";

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
          <Button id="badge-dismiss-default" onClick={clearFilters} size={"sm"}>
            Remove Filters
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
          </Button>
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
