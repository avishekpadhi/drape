// RadioButton.jsx
const RadioButton = ({ label, value, checked, onChange, name, id }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                   dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={id} className="ms-2 text-sm font-medium text-zinc-700">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
