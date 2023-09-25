import { useState } from 'react';
import './Bill.css';

export function Bill({ billAmount, setBillAmount }) {
  // State for border color
  const [borderColor, setBorderColor] = useState('');

  // Function to handle bill amount input changes
  const handleBillAmountChange = (e) => {
    // Update the bill amount state when the input value changes
    setBillAmount(e.target.value);
  };

  // Function to handle input click and change border color
  const handleInputClick = () => {
    setBorderColor('#26C2AE'); // Set the border color to green when input is clicked
  };

  return (
    <div className='bill_'>
      <h2 className="bill">Bill </h2>
      <div className="input-with-logo">
        <input
          className='input_'
          type="text"
          required={true}
          value={billAmount}
          onChange={handleBillAmountChange}
          onClick={handleInputClick} // Handle input click
          style={{ borderColor: borderColor }} // Apply the border color dynamically
        />
        <div className='svg-placeholder'>
          <img src="/icon-dollar.svg" alt="Dollar Icon" />
        </div>
      </div>
    </div>
  );
}
