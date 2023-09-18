import { useEffect, useState } from 'react'
import './People.css'



export function People() {
    const [showPlaceholder , setShowPlaceholder] = useState(true);

    const hendleInputClick = () => {
        console.log('clicked')
        setShowPlaceholder(false)
    }

    useEffect(() => {
        const hendleInputClick = (event) => {
            if (!event.target.closest(".people_number")){
                console.log('clicked outside')
                setShowPlaceholder(true)
            }
        }
         // Add the event listener when the component mounts
        document.addEventListener('click', hendleInputClick);

         // Clean up the event listener when the component unmounts
         return () => {
            document.removeEventListener('click', hendleInputClick);

        };
    }, []);

   

    return (
        <div className='people'>
            <h2 className='people_h2'>Number of People</h2>
            <div className='relative'>
                <input className='people_number' type='text' required={true} onClick={hendleInputClick}/>
                {showPlaceholder && <img className='person_icon' src="/icon-person.svg" alt="Person Icon" />}
            </div>
        </div>
    )
}