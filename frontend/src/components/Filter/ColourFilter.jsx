import React from "react";
import RadioButton from "../ui/RadioButton";
import { colours } from "../../data/data";

export const ColourFilter = () => {
  return (
    <div>
      {colours.map((colour) => (
        <RadioButton
          key={colour.value}
          name="colour"
          value={colour.value}
          label={colour.label}
          showColorPreview={true}
          colorCode={colour.code}
        />
      ))}
    </div>
  );
};
