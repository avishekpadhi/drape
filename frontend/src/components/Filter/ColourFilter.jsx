import React from "react";
import RadioButton from "../ui/RadioButton";
import { colours } from "../../data/data";
import { useFilter } from "../../context/FilterContext";

export const ColourFilter = () => {
  const { selectedColour, setSelectedColour } = useFilter();
  const handleColourChange = (e) => {
    setSelectedColour(e.target.value);
  };
  return (
    <div>
      {colours.map((colour) => (
        <div key={colour.value} className="my-3">
          <RadioButton
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
