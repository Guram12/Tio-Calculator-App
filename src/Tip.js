import React from 'react';
import './Tip.css';


export function Tip({ tipPercentage, setTipPercentage }) {
  // Function to handle tip percentage input changes
  const handleTipPercentageChange = (e) => {
    // Update the tip percentage state when the input value changes
    setTipPercentage(parseFloat(e.target.value));
  };

  // Function to handle tip percentage option clicks
  const handleTipOptionClick = (percentage) => {
    // Update the tip percentage state when a percentage option is clicked
    setTipPercentage(percentage);
  };

  return (
    <div>
      <h2 className='select_tip'>Select Tip %</h2>

      <div className='tip_container'>
        <div className='white raw1'>
          <div className='column first firstRaw' onClick={() => handleTipOptionClick(5)}>5%</div>
          <div className='column first firstRaw' onClick={() => handleTipOptionClick(10)}>10%</div>
          <div className='column first firstRaw' onClick={() => handleTipOptionClick(15)}>15%</div>
        </div>
        <div className='white raw2'>
          <div className='column second secondraw' onClick={() => handleTipOptionClick(25)}>25%</div>
          <div className='column second secondraw' onClick={() => handleTipOptionClick(50)}>50%</div>
          <input
            className="input-field column secondraw"
            type='text'
            placeholder="Custom"
            value={tipPercentage} // Set the input value to the tip percentage state
            onChange={handleTipPercentageChange} // Handle input changes
          />
        </div>
      </div>
    </div>
  );
}
