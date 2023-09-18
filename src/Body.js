import './Body.css'
import {Bill} from "./Bill"
import {Tip} from './Tip'


export function Body() {
    return(
        <div className="center-container">
            <div className='centered-element' >
            <Bill />
            <Tip />
            </div>
        </div>
    )
}