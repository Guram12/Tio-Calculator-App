
import './Bill.css';

export function Bill() {

    return (
        <div className='bill_'>
            <h2 className="bill">Bill </h2>
            <div className="input-with-logo">
                <input
                    className='input_'
                    type="text"
                    required={true}
                />
                <div className='svg-placeholder'>
                    <img src="/icon-dollar.svg" alt="Dollar Icon" />
                </div>
            </div>
        </div>
    );
}
