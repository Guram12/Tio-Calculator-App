
import './Result.css';

export function Result() {

  return (
    <div className='result'>
      <div className='little_cont'>
        <div>
          <h2 className='tip_amount'>Tip amount</h2>
          <p className='every_person'>/ person</p>
        </div>
        {/* tip amount */}
        <div>
          <h1 className='first_result'>$ </h1>
        </div>
      </div>
      <div className='little_cont'>
        <div>
          <h2 className='tip_amount only_total'>Total</h2>
          <p className='error'>/ person</p>
        </div>
        {/* Total */}
        <div>
          <h1 className='second_result'>$</h1>
        </div>
      </div>
      {/* reset button */}
      <button className='button' >RESET</button>
    </div>
  );
}
