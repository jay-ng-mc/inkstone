import {ButtonProps} from '../types/ButtonProps'
import './InvertedButton.scss'

// images
import { ReactComponent as RightArrowSVG } from '../../images/rightArrow.svg'

function InvertedButton(props: ButtonProps) {
    return (
        <button className="invertedButton" name={props.buttonName} type="button">
            {props.buttonText}
            {props.buttonIcon?<RightArrowSVG className="buttonIcon"/>:<div/>}
        </button>
    )
}

export default InvertedButton