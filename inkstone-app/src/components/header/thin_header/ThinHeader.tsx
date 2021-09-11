import { useTranslation } from 'react-i18next'
import {
    Link
} from 'react-router-dom';
import Popup from 'reactjs-popup';
import LanguageSelector from '../../languageSelector/LanguageSelector'
import './ThinHeader.scss'

// images
import { ReactComponent as InkstoneLogoSVG } from '../../../images/inkstoneLogo.svg'
import inkstoneLogoPNG from '../../../images/inkstoneLogoHorizontal.png'

export default function Header () {
    return (
        <div className="header">
            <HeaderLogo/>
            <ActionBar/>
        </div>
    )
}

function HeaderLogo() {
    return (
        <div className="headerLogo">
            <Link to="">
                {/* <InkstoneLogoSVG className="headerLogoImage"/> */}
                <img className="headerLogoImage" src={inkstoneLogoPNG} alt="Inkstone logo"/>
            </Link>
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
    const { t } = useTranslation(['header'])
    return (
        <div className="headerRouterLinks">
            <nav>
            <ul className="headerRouterLinksList">
                <li>
                    <Link to="ielts-speaking">
                        {t('headerRouterServicesDropdownOptions.ielts-speaking')}
                    </Link>
                </li>
                <li>
                    <Link to="writing-service">
                        {t('headerRouterServicesDropdownOptions.writing-service')}
                    </Link>
                </li>
                <li>
                    <Link to="essay-clinic">
                        {t('headerRouterServicesDropdownOptions.essay-clinic')}
                    </Link>
                </li>
                <li>
                    <Link to="/about">{t('headerRouterLinks.about')}</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}