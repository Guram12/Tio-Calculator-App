import './People.css'

export function People() {

    return (
        <div className='people'>
            <h2 className='people_h2'>Number of People</h2>
            <div className='relative'>
                <input className='people_number'
                    type='text'
                    required={true}
                   />
               <img className='person_icon' src="/icon-person.svg" alt="Person Icon" />
            </div>
        </div>
    )
}