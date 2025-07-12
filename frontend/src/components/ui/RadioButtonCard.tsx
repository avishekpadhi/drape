import React, { useRef } from "react";
import RadioButton from "./RadioButton";

interface RadioButtonCardProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  colorCode?: string;
  showColorPreview?: boolean;
}

const RadioButtonCard: React.FC<RadioButtonCardProps> = ({
  label,
  value,
  checked,
  onChange,
  name,
  id,
  colorCode,
  showColorPreview,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      className={`border rounded-lg p-3 mb-3 cursor-pointer hover:border-blue-400 ${
        checked ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
      }`}
      onClick={handleOnClick}
    >
      <RadioButton
        id={id}
        label={label}
        value={value}
        checked={checked}
        onChange={onChange}
        name={name}
        inputRef={inputRef}
        colorCode={colorCode}
        showColorPreview={showColorPreview}
      />
    </div>
  );
};

export default RadioButtonCard;
