import React, { useState } from 'react';
import SvgComponent from './SvgComponent';
import ToggleComponent from './ToggleComponent';
import './App.css';

const App = () => {
  const [visibleElements, setVisibleElements] = useState(['circle1', 'rect1']);

  const handleToggle = (elementId) => {
    setVisibleElements((prevVisibleElements) =>
      prevVisibleElements.includes(elementId)
        ? prevVisibleElements.filter((id) => id !== elementId)
        : [...prevVisibleElements, elementId]
    );
  };

  return (
    <div className="App">
      <SvgComponent visibleElements={visibleElements} />
      <ToggleComponent onToggle={handleToggle} />
    </div>
  );
};

export default App;
