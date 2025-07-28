import React from "react";
import RadioButton from "../ui/RadioButton";
import { colours } from "../../data/data";
import { useFilter } from "../../context/FilterContext";

export const ColourFilter = () => {
  const { selectedColour, setSelectedColour } = useFilter();
  const handleColourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColour(e.target.value);
  };
  return (
    <div>
      {colours.map((colour) => (
        <div key={colour.value} className="my-3">
          <RadioButton
            id={`${colour.value}`}
            name="colour"
            value={colour.value}
            label={colour.label}
            showColorPreview={true}
            colorCode={colour.code}
            onChange={handleColourChange}
            checked={selectedColour === colour.value}
          />
        </div>
      ))}
    </div>
  );
};
