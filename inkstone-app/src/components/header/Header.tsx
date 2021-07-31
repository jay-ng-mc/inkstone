import { useTranslation } from 'react-i18next'
import {
    Link
} from 'react-router-dom';
import LanguageSelector from '../languageSelector/LanguageSelector'
import './Header.scss'

export default function Header () {
    return (
        <div className="header">
            <img className="headerLogo" src="inkstoneLogo.png" alt="Inkstone Logo"/>
            <hr className="headerHorizontalRule"></hr>
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
    const { t, i18n } = useTranslation(['header'])
    return (
        <div className="headerRouterLinks">
            <nav>
            <ul className="headerRouterLinksList">
                <li>
                    <Link to="/">{t('headerRouterLinks.home')}</Link>
                </li>
                <li>
                    <Link to="/about">{t('headerRouterLinks.about')}</Link>
                </li>
                <li>
                    <Link to="/services">{t('headerRouterLinks.services')}</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}