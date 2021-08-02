import { useTranslation } from 'react-i18next'
import {
    Link
} from 'react-router-dom';
import Popup from 'reactjs-popup';
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
                    <Popup
                    // className="headerRouterServicesDropdown"
                    trigger={<div className="headerRouterServicesTrigger">{t('headerRouterLinks.services')}</div>}
                    on="click"
                    closeOnDocumentClick
                    position="bottom left"
                    arrow={false}>
                        <div className="headerRouterServicesDropdownList">
                            <Link to="ielts-speaking" className="headerRouterServicesDropdownListItem">
                                {t('headerRouterServicesDropdownOptions.ielts-speaking')}
                            </Link>
                            <Link to="writing-service" className="headerRouterServicesDropdownListItem">
                                {t('headerRouterServicesDropdownOptions.writing-service')}
                            </Link>
                            <Link to="essay-writing-clinic" className="headerRouterServicesDropdownListItem">
                                {t('headerRouterServicesDropdownOptions.essay-clinic')}
                            </Link>
                        </div>
                    </Popup>
                </li>
            </ul>
            </nav>
        </div>
    )
}