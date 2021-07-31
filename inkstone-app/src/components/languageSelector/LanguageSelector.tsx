import { render } from '@testing-library/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageSelector.scss'

export default function LanguageSelector() {
    const { t, i18n } = useTranslation(['home'])
    return (
        <LanguageSelectorClass i18n={i18n}/>
    )
}

class LanguageSelectorClass extends React.Component<{i18n: any}, {lang: string}> {
    state = {lang:'en'}

    componentDidMount() {
        this.setState({
            lang: this.props.i18n.language // update component state with current localization stored in i18n
        })
    }

    changeLanguage = (l: string) => {
        this.props.i18n.changeLanguage(l) // update i18n language
        this.setState({lang: l}) // update component's language variable
    }

    render() {
        return (
            <div className="languageSelector">
                <button 
                className="languageSelectorButton"
                type="button" 
                disabled={this.state.lang === 'en'} 
                onClick={() => this.changeLanguage('en')}>
                    <span className="languageSelectorButtonText">English</span>
                    <img className="buttonIcon" src="flag_GB.png" alt="EN"/>
                </button>
                <button 
                className="languageSelectorButton"
                type="button" 
                disabled={this.state.lang === 'zh_CN'} 
                onClick={() => this.changeLanguage('zh_CN')}>
                    <span className="languageSelectorButtonText">简体中文</span>
                    <img className="buttonIcon" src="flag_CN.png" alt="CN"/>
                </button>
            </div>
        )
    }
}
