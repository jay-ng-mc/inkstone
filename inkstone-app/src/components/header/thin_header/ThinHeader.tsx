import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
    Link,
    useLocation
} from 'react-router-dom';
import LanguageSelector from '../../languageSelector/LanguageSelector'
import './ThinHeader.scss'

// images
import inkstoneLogoPNG from '../../../images/inkstoneLogoHorizontal.png'
import { ReactComponent as InkstoneLogoBWSVG } from '../../../images/inkstoneLogoBWSimplified.svg'

export default function Header () {
    const route = useLocation().pathname
    const useBWHeader = route === "/"
    const [bwLogo, setBWLogo] = useState(true)
    return (
        <div className="header">
            {useBWHeader ?
                <div className="headerContentBW" onMouseEnter={() => {setBWLogo(false)}} onMouseLeave={() => {setBWLogo(true)}}>
                    <HeaderLogo useBWLogo={bwLogo}/>
                    <ActionBar/>
                </div>
                :
                <div className="headerContent">
                    <HeaderLogo useBWLogo={false}/>
                    <ActionBar/>
                </div>
            }
        </div>
    )
}

function HeaderLogo (props: {useBWLogo: boolean}) {
    return (
        <div className="headerLogo">
            <Link to="">
                {props.useBWLogo ?
                    <InkstoneLogoBWSVG className="headerLogoImage"/>
                    :
                    <img className="headerLogoImage" src={inkstoneLogoPNG} alt="Inkstone logo"/>
                }
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
    // the router links contain highlighted services for quick access
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