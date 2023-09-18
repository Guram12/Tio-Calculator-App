import React, { useState } from 'react';
import { Bill } from './Bill';
import { Tip } from './Tip';
import { People } from './People';
import { Result } from './Result';
import './Body.css';

export function Body() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState('');

  // Function to reset all input values
  const handleReset = () => {
    setBillAmount('');
    setTipPercentage('');
    setNumberOfPeople('');
  };

  return (
    <div className="center-container">
      <div className="centered-element">
        <Bill billAmount={billAmount} setBillAmount={setBillAmount} />
        <Tip tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
        <People numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} />
        <Result
          billAmount={billAmount}
          tipPercentage={tipPercentage}
          numberOfPeople={numberOfPeople}
        />
        <button className="reset-button button" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}
