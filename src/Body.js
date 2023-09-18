import {Bill} from "./Bill"
import {Tip} from './Tip'
import {People} from './People'
import {Result} from './Result' 
import './Body.css'


export function Body() {
    return(
        <div className="center-container">
            <div className='centered-element' >
            <Bill />
            <Tip />
            <People />
            <Result />
            </div>
        </div>
    )
}