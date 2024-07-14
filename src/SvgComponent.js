import React from 'react';

const SvgComponent = ({ visibleElements }) => {
  return (
    <div style={{ width: '200px', height: '200px', overflow: 'hidden', border: '1px solid black' }}>
      <svg
        id="mySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ width: '100%', height: '100%' }}
      >
        <circle
          id="circle1"
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red"
          style={{ display: visibleElements.includes('circle1') ? 'block' : 'none' }}
        />
        <rect
          id="rect1"
          x="10"
          y="10"
          width="30"
          height="30"
          stroke="black"
          strokeWidth="3"
          fill="blue"
          style={{ display: visibleElements.includes('rect1') ? 'block' : 'none' }}
        />
      </svg>
    </div>
  );
};

export default SvgComponent;
