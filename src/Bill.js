import React, { useState } from 'react';
import './Bill.css'


export function Bill() {
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const handleInputClick = () => {
        console.log('clicked')
        setShowPlaceholder(false);
    };

    return (
        <div className='bill_'>
            <h2 className="bill">Bill </h2>
            <div className="input-with-logo">
                <input className='input_' type="text" required={true} onClick={handleInputClick} />
                <div className='svg-placeholder'>
                {showPlaceholder && <img src="/icon-dollar.svg" alt="Dollar Icon" />}
                </div>
            </div>
        </div>
    );
}
