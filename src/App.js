// In App.js
import React, { useState } from 'react';
import { Header } from './Header';

import { Bill } from './Bill';
import { Tip } from './Tip';
import { People } from './People';
import { Result } from './Result';
import './App.css';

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
      <div className='main_header'>
          <Header />
      </div>
      
      <div className="center-container">
        <div className="centered-element">
            <div className='first_main_div'>
                <Bill billAmount={billAmount} setBillAmount={setBillAmount} />
                <Tip tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
                <People numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} />
            </div>
            <div className='second_main_div'>
                <Result billAmount={billAmount} 
                        tipPercentage={tipPercentage}
                        numberOfPeople={numberOfPeople} 
                        resetValues={resetValues}
                  />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
