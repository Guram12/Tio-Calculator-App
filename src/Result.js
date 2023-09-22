import React, { useEffect, useState } from 'react';
import './Result.css';

export function Result({ billAmount, tipPercentage, numberOfPeople, resetValues }) {
  // State variables to store the calculated results
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  // Calculate the results whenever the input values change
  useEffect(() => {
    // Validate input values
    const validBillAmount = parseFloat(billAmount);
    const validTipPercentage = parseFloat(tipPercentage);
    const validNumberOfPeople = parseFloat(numberOfPeople);

    // Check if input values are valid numbers
    if (isNaN(validBillAmount) || isNaN(validTipPercentage) || isNaN(validNumberOfPeople)) {
      // Handle invalid input (e.g., show an error message)
      setTipAmountPerPerson(0);
      setTotalPerPerson(0);
    } else {
      // Calculate the tip amount per person
      const tipAmount = (validBillAmount * (validTipPercentage / 100)) / validNumberOfPeople;
      setTipAmountPerPerson(tipAmount);

      // Calculate the total amount per person
      const total = (validBillAmount / validNumberOfPeople) + tipAmount;
      setTotalPerPerson(total);
    }
  }, [billAmount, tipPercentage, numberOfPeople]);

  // Function to reset values
  const handleReset = () => {
    resetValues();
  };

  return (
    <div className='result'>
      <div className='little_cont'>
        <div>
          <h2 className='tip_amount'>Tip amount</h2>
          <p className='every_person'>/ person</p>
        </div>
        {/* Display the calculated tip amount per person */}
        <div>
          <h1 className='first_result'>$ {tipAmountPerPerson.toFixed(2)}</h1>
        </div>
      </div>
      <div className='little_cont'>
        <div>
          <h2 className='tip_amount only_total'>Total</h2>
          <p className='error'>/ person</p>
        </div>
        {/* Display the calculated total amount per person */}
        <div>
          <h1 className='second_result'>$ {totalPerPerson.toFixed(2)}</h1>
        </div>
      </div>
      {/* reset button */}
      <button className='button' onClick={handleReset}>RESET</button>
    </div>
  );
}
