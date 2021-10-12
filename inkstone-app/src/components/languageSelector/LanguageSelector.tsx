import React from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageSelector.scss'

// images
import flag_GB from '../../images/flag_GB.png'
import flag_CN from '../../images/flag_CN.png'

export default function LanguageSelector() {
    const { t: _, i18n } = useTranslation(['home'])
    return (
        <LanguageSelectorClass i18n={i18n}/>
    )
}

class LanguageSelectorClass extends React.Component<{i18n: any}> {

    changeLanguage = (l: string) => {
        this.props.i18n.changeLanguage(l) // update i18n language
    }

    render() {
        return (
            <div className="languageSelector">
                <button 
                className="languageSelectorButton"
                type="button" 
                disabled={this.props.i18n.language === 'en'} 
                onClick={() => this.changeLanguage('en')}>
                    <span className="languageSelectorButtonText">English</span>
                    <img className="buttonIcon" src={flag_GB} alt="EN"/>
                </button>
                <button 
                className="languageSelectorButton"
                type="button" 
                disabled={this.props.i18n.language === 'zh_CN'} 
                onClick={() => this.changeLanguage('zh_CN')}>
                    <span className="languageSelectorButtonText">简体中文</span>
                    <img className="buttonIcon" src={flag_CN} alt="CN"/>
                </button>
            </div>
        )
    }
}
