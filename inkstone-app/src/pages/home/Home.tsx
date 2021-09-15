import { useTranslation } from 'react-i18next'
import {
    Link
} from 'react-router-dom';
import InvertedButton from '../../components/button/InvertedButton'
import './Home.scss'

// images
import teamBannerBW from '../../images/teamBannerBW.png'
import topBannerBG from '../../images/homePageBackgroundSmall.png'
import ServicesList from '../../components/services_list/ServicesList';

function Home() {
    const { t } = useTranslation(['home'])
    return (
        <div className="homePage">
            <TopBannerContainer t={t}/>
            <img className="homeTeamBanner" src={teamBannerBW} alt="Inkstone Team Members Banner"/>
            <HomePageContent t={t}/>
        </div>
    )
}

function TopBannerContainer(props: any) {
    return (
        <div className="homeTopBannerContainer">
            <img className="homeTopBannerBackground" src={topBannerBG} alt="."/>
            <TopBanner t={props.t}/>
        </div>
    )
}

function TopBanner(props: any) {
    const t = props.t // receive the translate function from parent
    return (
        <div className="homeTopBanner">
            <div className="homeTopBannerHeader">{t('homeTopBanner.header')}</div>
            <Link to="ielts-speaking" className="homeToServicesLink">
                <InvertedButton buttonName="homeToServicesButton" buttonText={t('homeTopBanner.buttonText')} buttonIcon={true}/>
            </Link>
        </div>
    )
}

function WhatWeDo(props: any) {
    const t = props.t
    return (
        <div className="homeWhatWeDo">
            <div className="homeWhatWeDoHeader">{t('homeWhatWeDo.header')}</div>
            <div className="homeWhatWeDoText">
                <p>{t('homeWhatWeDo.text.line1')}</p>
                <p>{t('homeWhatWeDo.text.line2')}</p>
            </div>
        </div>
    )
}

function HomePageContent(props: any) {
    return (
        <div className="homePageContentBox">
            <ServicesList/>
            <WhatWeDo t={props.t}/>
        </div>
    )
}

export default Home