import {ButtonProps} from '../types/ButtonProps'
import './InvertedButton.scss'

// images
import rightArrow from '../../images/rightArrow.svg'

function InvertedButton(props: ButtonProps) {
    return (
        <button className="invertedButton" name={props.buttonName} type="button">
            {props.buttonText}
            {props.buttonIcon?<img className="buttonIcon" src={rightArrow} alt=">"/>:<div/>}
        </button>
    )
}

export default InvertedButton