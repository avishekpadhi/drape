import React from "react";
import RadioButtonCard from "../ui/RadioButtonCard";
import { useFilter } from "../../context/FilterContext";
import { genders } from "../../data/data";

export const GenderFilter = () => {
  const { selectedGender, setSelectedGender } = useFilter();

  const handleRadioButtonChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div>
      {genders.map((gender) => {
        return (
          <RadioButtonCard
            key={gender.value}
            name="gender"
            value={gender.value}
            label={gender.label}
            checked={selectedGender === gender.value}
            onChange={handleRadioButtonChange}
          />
        );
      })}
    </div>
  );
};
