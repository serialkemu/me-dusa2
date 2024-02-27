import React, { useState } from 'react';

const RangeInput = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(parseFloat(event.target.value));
  };

  const getColor = () => {
    // Calculate the color based on the value
    const hue = (value / 5) * 240; // 240 is the hue value for blue
    return `hsl(${hue}, 100%, 50%)`; // Convert to HSL color format
  };

  return (
    <div className="container">
      <label htmlFor="customRange3" className="form-label">
        Urgency
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="5"
        step="0.5"
        id="customRange3"
        value={value}
        onChange={handleChange}
      ></input>
      <div
        className="range-indicator"
        style={{
          background: `linear-gradient(to right, blue, ${getColor()} 50%, red)`
        }}
      ></div>
    </div>
  );
};

export default RangeInput;
