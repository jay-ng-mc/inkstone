import {
    Link
} from 'react-router-dom';
import LanguageSelector from '../languageSelector/LanguageSelector'
import './Header.scss'

export default function Header () {
    return (
        <div className="header">
            <ActionBar/>
        </div>
    )
}

function ActionBar() {
    return (
        <div className="headerActionBar">
            <RouterLinks/>
            <LanguageSelector/>
        </div>
    )
}

function RouterLinks() {
    return (
        <div className="headerRouterLinks">
            <nav>
            <ul className="list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}