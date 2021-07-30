import { useTranslation } from 'react-i18next'
import InvertedButton from '../../components/button/InvertedButton'
import './Home.scss'

function Home() {
    const { t, i18n } = useTranslation(['home'])
    return (
        <div className="homePage">
            <TopBanner t={t}/>
            <img className="homeTeamBanner" src="teamBannerBW.png"/>
            <HomePageContent t={t}/>
        </div>
    )
}

function TopBanner(props: any) {
    const t = props.t // receive the translate function from parent
    return (
        <div className="homeTopBanner">
            <div className="homeTopBannerHeader">{t('homeTopBanner.header')}</div>
            <hr className="hr-custom"></hr>
            <div className="homeTopBannerText">{t('homeTopBanner.text')}</div>
            <InvertedButton buttonName="homeToServicesButton" buttonText={t('homeTopBanner.buttonText')} buttonIcon={true}/>
        </div>
    )
}

function HomePageContent(props: any) {
    const t = props.t
    return (
        <div className="homePageContent">
            <div className="homePageContentHeader">{t('homePageContent.header')}</div>
            <div className="homePageContentText">
                <p>{t('homePageContent.text.line1')}</p>
                <p>{t('homePageContent.text.line2')}</p>
            </div>
        </div>
    )
}

export default Home