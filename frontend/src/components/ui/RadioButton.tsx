// RadioButton.jsx
interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  colorCode?: string;
  showColorPreview?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
  name,
  id,
  colorCode,
  showColorPreview,
  inputRef,
}) => {
  return (
    <div className="flex items-center">
      <input
        ref={inputRef}
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-black accent-black bg-gray-100 border-gray-300
                   dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
      />
      {showColorPreview && (
        <span
          className="w-4 h-4 ml-2 border border-gray-300"
          style={{ backgroundColor: colorCode }}
        ></span>
      )}
      <label htmlFor={id} className="ms-2 text-sm font-medium text-zinc-700">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
