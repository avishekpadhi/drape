import React, { useEffect } from "react";
import RadioButton from "../ui/RadioButton";
import { useFilter } from "../../context/FilterContext";

export const GenderFilter = () => {
  const { selectedGender, setSelectedGender } = useFilter();
  const handleRadioButtonChange = (e) => {
    setSelectedGender(e.target.value);
  };

  useEffect(() => {
    console.log(selectedGender);
  }, [selectedGender]);
  return (
    <div>
      <RadioButton
        name="gender"
        value="man"
        label="Man"
        onChange={handleRadioButtonChange}
      />
      <RadioButton
        name="gender"
        value="woman"
        label="Woman"
        onChange={handleRadioButtonChange}
      />
      <RadioButton
        name="gender"
        value="unisex"
        label="Unisex"
        onChange={handleRadioButtonChange}
      />
    </div>
  );
};
