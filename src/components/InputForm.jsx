import { useState } from "react";

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    const age = parseInt(inputValue, 10);
    if (isNaN(age)) {
      alert("Please enter a valid number.");
    } else if (age < 18) {
      alert(`Sorry ${name}, you are underage.`);
    } else if (age >= 18 && age < 45) {
      alert(`Welcome ${name}!`);
    } else {
      alert(`Sorry ${name}, you are too old.`);
    }
  };

  return (
    <div>
      <h2>Enter Age and Name Please</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <input
        type="text"
        name="age"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your age"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleButtonClick}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Enter
      </button>
    </div>
  );
};

export default InputForm;
