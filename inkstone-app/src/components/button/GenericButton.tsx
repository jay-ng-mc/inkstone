import {ButtonProps} from '../types/ButtonProps'
import './GenericButton.scss'

// images
import { ReactComponent as RightArrowSVG } from '../../images/rightArrow.svg'

function GenericButton(props: ButtonProps) {
    return (
        <button className="genericButton" name={props.buttonName} type="button">
            {props.buttonText}
            {props.buttonIcon?<RightArrowSVG className="buttonIcon"/>:<div/>}
        </button>
    )
}

export default GenericButton