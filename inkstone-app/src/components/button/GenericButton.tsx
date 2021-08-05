import {ButtonProps} from '../types/ButtonProps'
import './GenericButton.scss'

// images
import rightArrow from '../../images/rightArrow.svg'

function GenericButton(props: ButtonProps) {
    return (
        <button className="genericButton" name={props.buttonName} type="button">
            {props.buttonText}
            {props.buttonIcon?<img className="buttonIcon" src={rightArrow} alt=">"/>:<div/>}
        </button>
    )
}

export default GenericButton