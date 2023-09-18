import './Body.css'
import {Bill} from "./Bill"
import {Tip} from './Tip'
import {People} from './People'

export function Body() {
    return(
        <div className="center-container">
            <div className='centered-element' >
            <Bill />
            <Tip />
            <People />
            </div>
        </div>
    )
}