import './Bill.css';

export function Bill({ billAmount, setBillAmount }) {
     // Function to handle bill amount input changes
    const handleBillAmountChange = (e) => {
        // Update the bill amount state when the input value changes
        setBillAmount(e.target.value);
    }

    return (
        <div className='bill_'>
            <h2 className="bill">Bill </h2>
            <div className="input-with-logo">
                <input
                    className='input_'
                    type="text"
                    required={true} // Set the input value to the bill amount state
                    value={billAmount}
                    onChange={handleBillAmountChange} // Handle input changes
                />
                <div className='svg-placeholder'>
                    <img src="/icon-dollar.svg" alt="Dollar Icon" />
                </div>
            </div>
        </div>
    );
}
