import React from 'react';
import './People.css';

export function People({ numberOfPeople, setNumberOfPeople }) {
  // Function to handle number of people input changes
  const handleNumberOfPeopleChange = (e) => {
    // Update the number of people state when the input value changes
    setNumberOfPeople(parseFloat(e.target.value));
  };

  return (
    <div className='people'>
      <h2 className='people_h2'>Number of People</h2>
      <div className='relative'>
        <input
          className='people_number'
          type='text'
          required={true}
          value={numberOfPeople} // Set the input value to the number of people state
          onChange={handleNumberOfPeopleChange} // Handle input changes
        />
        <img className='person_icon' src="/icon-person.svg" alt="Person Icon" />
      </div>
    </div>
  );
}
