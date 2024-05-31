// Dropdown.jsx

import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Handle option click, you can perform any action here
    console.log(`Option "${option}" clicked`);
    // Close the dropdown after selecting an option
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block"> {/* Change from "block" to "inline-block" */}
      <button
        onClick={toggleDropdown}
        className="text-sm text-white focus:outline-none"
      >
        Dropdown
        <i className={`ml-1 fas fa-caret-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-black text-white py-2 px-4 mt-1 w-32 rounded">
          <button className="block w-full text-left py-1" onClick={() => handleOptionClick('Drop 1')}>
            Drop 1
          </button>
          <button className="block w-full text-left py-1" onClick={() => handleOptionClick('Drop 2')}>
            Drop 2
          </button>
          <button className="block w-full text-left py-1" onClick={() => handleOptionClick('Drop 3')}>
            Drop 3
          </button>
          <button className="block w-full text-left py-1" onClick={() => handleOptionClick('Drop 4')}>
            Drop 4
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
