import React, { useState } from 'react';

const ToggleComponent = ({ onToggle }) => {
  const [selectedElement, setSelectedElement] = useState('');

  const handleSelectChange = (e) => {
    setSelectedElement(e.target.value);
  };

  const handleToggleClick = () => {
    if (selectedElement) {
      onToggle(selectedElement);
    }
  };

  return (
    <div>
      <select value={selectedElement} onChange={handleSelectChange}>
        <option value="">Select an element to show/hide</option>
        <option value="circle1">Circle</option>
        <option value="rect1">Rectangle</option>
      </select>
      <button onClick={handleToggleClick}>Toggle Visibility</button>
    </div>
  );
};

export default ToggleComponent;
