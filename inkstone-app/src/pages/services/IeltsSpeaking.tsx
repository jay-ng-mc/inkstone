import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import GenericButton from '../../components/button/GenericButton'
import './IeltsSpeaking.scss'

export default function IeltsSpeaking() {
    const { t } = useTranslation('services')
    const curriculumImages = ['curriculum1', 'curriculum2', 'curriculum3']
    return (
        <div className="ieltsSpeaking">
            {/* ielts speaking poster */}
            <img className="ieltsSpeakingPoster" 
            src={require("../../images/services/ieltsSpeaking/ieltsSpeakingPoster.png")} 
            alt="IELTS Speaking Course Poster"/>
            <SignUpButton t={t}/>
            
            {/* what is ielts */}
            <div className="whatIsIelts">
                <div className="whatIsIeltsHeader">{t('ieltsSpeaking.ieltsSpeakingWhatIsIelts.header')}</div>
                <div className="whatIsIeltsText">{t('ieltsSpeaking.ieltsSpeakingWhatIsIelts.text')}</div>
            </div>
            
            {/* curriculum overview */}
            <div className="ieltsSpeakingCurriculumOverviewHeader">{t('ieltsSpeaking.ieltsSpeakingCurriculumOverviewHeader')}</div>
            {curriculumImages.map(c => (
                <img className="ieltsSpeakingCurriculumOverviewImage"
                key={c}
                src={require('../../images/services/ieltsSpeaking/' + c + '.png')}
                alt={c}/>
            ))}
            <SignUpButton t={t}/>
        </div>
    )
}

function SignUpButton(props: {t: any}) {
    return (
        <Link to='enroll' className="ieltsSpeakingSignUp">
            <GenericButton buttonName="ieltsSpeakingSignUp" buttonText={props.t('ieltsSpeaking.ieltsSpeakingSignupButtonText')} buttonIcon={true}/>
        </Link>
    )
}