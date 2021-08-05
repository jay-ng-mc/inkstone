import {ButtonProps} from '../types/ButtonProps'
import './InvertedButton.scss'

function InvertedButton(props: ButtonProps) {
    return (
        <button className="invertedButton" name={props.buttonName} type="button">
            {props.buttonText}
            {props.buttonIcon?<img className="buttonIcon" src="images/rightArrow.svg"/>:<div/>}
        </button>
    )
}

export default InvertedButton