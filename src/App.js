// In App.js
import React, { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Bill } from './Bill';
import { Tip } from './Tip';
import { People } from './People';
import { Result } from './Result';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);


  const resetValues = () => {
    setBillAmount('');
    setTipPercentage(0);
    setNumberOfPeople(1);
  };


  return (
    <div className="App">
      <Header />
      <div className="center-container">
        <div className="centered-element">
          <Bill billAmount={billAmount} setBillAmount={setBillAmount} />
          <Tip tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
          <People numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} />
          <Result billAmount={billAmount} 
                  tipPercentage={tipPercentage}
                  numberOfPeople={numberOfPeople} 
                  resetValues={resetValues}
                  />
        </div>
      </div>
    </div>
  );
}

export default App;
