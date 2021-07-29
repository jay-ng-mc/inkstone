import {ButtonProps} from '../types/ButtonProps'
import './GenericButton.scss'

function GenericButton(props: ButtonProps) {
    return (
        <button className="genericButton" name={props.buttonName} type="button">
            {props.buttonText}
            {props.buttonIcon?<img className="buttonIcon" src="rightArrow.svg"/>:<div/>}
        </button>
    )
}

export default GenericButton