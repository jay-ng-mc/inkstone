import InvertedButton from '../../components/button/InvertedButton'
import './Home.scss'

function Home() {
    return (
        <div className="homePage">
            <TopBanner/>
            <img className="homeTeamBanner" src="teamBannerBW.png"/>
            <HomePageContent/>
        </div>
    )
}

function TopBanner() {
    return (
        <div className="homeTopBanner">
            <div className="header">Speak like a native.</div>
            <hr className="hr-custom"></hr>
            <div className="text">Are you going to fit in? We are your top choice for professional and academic English.</div>
            <InvertedButton buttonName="homeToServicesButton" buttonText="Services" buttonIcon={true}/>
        </div>
    )
}

function HomePageContent() {
    return (
        <div className="homePageContent">
            <div className="header">What we do</div>
            <div className="text">
                <p>Academic English competency is critical in university and careers. Inkstone offers courses and writing assistance to enable learners to use English more like native users.</p>
                <p>Inkstone's teaching team fully comprises of native English speakers and experienced private tutors. Our clients have achieved top scores in IELTS, TOEFL, SAT, IB and A-level examinations. We have worked with international adult professionals in the business, tourism and security industries.</p>
            </div>
        </div>
    )
}

export default Home