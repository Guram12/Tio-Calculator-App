import React, { useState, useEffect } from 'react';
import './Result.css';

export function Result({ billAmount, tipPercentage, numberOfPeople }) {
    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const bill = parseFloat(billAmount);
        const tip = parseFloat(tipPercentage) || 0; // Handle empty string as 0
        const total = bill + (bill * tip) / 100;
        const perPerson = total / numberOfPeople;

        setTipAmount(tip);
        setTotalAmount(total);
    }, [billAmount, tipPercentage, numberOfPeople]);

    const handleReset = () => {
        // Resetting the tipAmount and totalAmount
        setTipAmount(0);
        setTotalAmount(0);
    };

    return (
        <div className='result'>
            <div className='little_cont'>
                <div>
                    <h2 className='tip_amount'>Tip amount</h2>
                    <p className='every_person'>/ person</p>
                </div>
                {/* tip amount */}
                <div>
                    <h1 className='first_result'>$ {tipAmount.toFixed(2)}</h1>
                </div>
            </div>
            <div className='little_cont'>
                <div>
                    <h2 className='tip_amount only_total'>Total</h2>
                    <p className='error'>/ person</p>
                </div>
                {/* Total */}
                <div>
                    <h1 className='second_result'>$ {totalAmount.toFixed(2)}</h1>
                </div>
            </div>
            {/* reset button */}
            <button className='button' onClick={handleReset}>RESET</button>
        </div>
    );
}
