import './Tip.css';
import React from 'react';

export function Tip() {

    return (
        <div>
            <h2 className='select_tip'>Select Tip %</h2>
            
            <div className='tip_container'>
                <div className='white'>
                    <div className='column first' >5%</div>
                    <div className='column first' >10%</div>
                    <div className='column first'>15%</div>
                </div>
                <div className='white'>
                    <div className='column second' >25%</div>
                    <div className='column second' >50%</div>
                    <input
                        className="input-field column"
                        type='text'
                        placeholder="Custom"
                    />
                </div>
            </div>
        </div>
    );
}
