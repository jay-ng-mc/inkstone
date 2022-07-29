import { useTranslation } from 'react-i18next'
import {
    Link
} from 'react-router-dom';
import InvertedButton from '../../components/button/InvertedButton'
import ServicesList from '../../components/services_list/ServicesList';
import './Home.scss'

// images
import teamBannerBW from '../../images/teamBannerBW.png'
import topBannerBG from '../../images/homePageBackgroundSmall.png'
import inkstoneTeamMapImage from '../../images/inkstoneTeamMap.png'
import howItWorksStep1 from '../../images/home/homeHowItWorksStep1.svg'
import howItWorksStep2 from '../../images/home/homeHowItWorksStep2.svg'

type TranslateFunc = (Function: string) => string
type PromoContentSectionType = {
    t: TranslateFunc,
    k: string
}

function Home() {
    const { t } = useTranslation(['home'])
    return (
        <div className="homePage">
            <TopBannerContainer t={t}/>
            <img className="homeTeamBanner" src={teamBannerBW} alt="Inkstone Team Members Banner"/>
            <HomePageContent t={t}/>
            <PromoContent t={t}/>
            <HowItWorks t={t}/>
        </div>
    )
}

function TopBannerContainer(props: {t: TranslateFunc}) {
    return (
        <div className="homeTopBannerContainer">
            <img className="homeTopBannerBackground" src={topBannerBG} alt="."/>
            <TopBanner t={props.t}/>
        </div>
    )
}

function TopBanner(props: {t: TranslateFunc}) {
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

function WhatWeDo(props: {t: TranslateFunc}) {
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

function HomePageContent(props: {t: TranslateFunc}) {
    return (
        <div className="homePageContentBox">
            <ServicesList/>
            <WhatWeDo t={props.t}/>
        </div>
    )
}

function PromoContent(props: {t: TranslateFunc}) {
    const t = props.t
    return (
        <div className="homePagePromoContent">
            <div className="homePagePromoContentHeader">
                {t('homePromoContent.homePromoHeader')}
            </div>
            <div className="homePagePromoContentFlexBox">
                <PromoContentSection t={t} k='homePromoInternational'/>
                <PromoContentSection t={t} k='homePromoStudents'/>
                <PromoContentSection t={t} k='homePromoExperienced'/>
                <PromoContentSection t={t} k='homePromoQuality'/>
            </div>
            <img className="homePagePromoContentInkstoneTeamMap"
            src={inkstoneTeamMapImage} alt="Inkstone Team Map"/>
        </div>
    )

    function PromoContentSection(props: PromoContentSectionType) {
        const t = props.t
        return (
            <div className="homePagePromoContentSection">
                <img className="homePagePromoContentSectionIcon" alt={props.k} src={require(`../../images/home/${props.k}.svg`)}/>
                <div className="homePagePromoContentSectionHeader">
                    {t(`homePromoContent.${props.k}.header`)}
                </div>
                <div className="homePagePromoContentSectionText">
                    {t(`homePromoContent.${props.k}.text`)}
                </div>
            </div>
        )
    }
}

function HowItWorks(props: {t: TranslateFunc}) {
    const t = props.t
    return (
        <div className="homePageHowItWorks">
            <div className="homePageHowItWorksHeader">
                {t('homeHowItWorks.header')}
            </div>
            <div className="homePageHowItWorksSteps">
                <div className="homePageHowItWorksStep">
                    <img src={howItWorksStep1} alt="1. "/>
                    {t('homeHowItWorks.text1')}
                </div>
                <div className="homePageHowItWorksStep">
                    <img src={howItWorksStep2} alt="2. "/>
                    {t('homeHowItWorks.text2')}
                </div>
            </div>
        </div>
    )
}

export default Home