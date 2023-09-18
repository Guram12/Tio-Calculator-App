import './Tip.css';
import React, { useState, useEffect } from 'react';

export function Tip() {
    const [selectedTip, setSelectedTip] = useState(null); // Initialize with null

    // Function to handle the selection of a tip percentage
    const handleTipSelection = (percentage) => {
        setSelectedTip(percentage); // Update the selectedTip state
    };

    // Use useEffect to log the updated value when selectedTip changes
    useEffect(() => {
        console.log(selectedTip);
    }, [selectedTip]);

    return (
        <div>
            <h2 className='select_tip'>Select Tip %</h2>
            
            <div className='tip_container'>
                <div className='white'>
                    <div className='column first' onClick={() => handleTipSelection(5)}>5%</div>
                    <div className='column first' onClick={() => handleTipSelection(10)}>10%</div>
                    <div className='column first' onClick={() => handleTipSelection(15)}>15%</div>
                </div>
                <div className='white'>
                    <div className='column second' onClick={() => handleTipSelection(25)}>25%</div>
                    <div className='column second' onClick={() => handleTipSelection(50)}>50%</div>
                    <input
                        className="input-field column"
                        type='text'
                        placeholder="Custom"
                        value={selectedTip === null ? '' : selectedTip}
                        onChange={(e) => {
                            const customTip = e.target.value;
                            setSelectedTip(customTip === '' ? null : parseInt(customTip));
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
