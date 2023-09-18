import React, { useState, useEffect } from 'react';
import './Bill.css';

export function Bill() {
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [billAmount, setBillAmount] = useState(''); // Initialize billAmount state

    const handleInputClick = () => {
        console.log('Input clicked');
        setShowPlaceholder(false);
    };

    const handleInputChange = (event) => {
        const newBillAmount = event.target.value;
        setBillAmount(newBillAmount); // Update billAmount state as the user types
        console.log('Bill Amount:', newBillAmount); // Log the newBillAmount
    };
    
    

    useEffect(() => {
        // Function to handle clicks outside of the component
        const handleClickOutside = (event) => {
            if (!event.target.closest('.input-with-logo')) {
                console.log('Clicked outside');
                setShowPlaceholder(true);
            }
        };
        // Add the event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='bill_'>
            <h2 className="bill">Bill </h2>
            <div className="input-with-logo">
                <input
                    className='input_'
                    type="text"
                    required={true}
                    onClick={handleInputClick}
                    value={billAmount} // Bind the input value to the billAmount state
                    onChange={handleInputChange} // Handle input changes
                />
                <div className='svg-placeholder'>
                    {showPlaceholder && <img src="/icon-dollar.svg" alt="Dollar Icon" />}
                </div>
            </div>
        </div>
    );
}
