import React from 'react'
import ReactDOM from 'react-dom'
import { useTranslation } from "react-i18next"
import './Enroll.scss'

export default function Enroll() {
    return (
        <div className="enroll">
            <BackupSignUpForm/>
            <SignUpForm/>
        </div>
    )
}

function BackupSignUpForm() {
    const { t, i18n } = useTranslation('enroll')
    return (
        <div className="enrollBackupSignUpForm">
            <div>{t('backupSignUpForm.backupHeader')}</div>
            <a href="https://www.surveymonkey.com/r/QNCRRHN" target="_blank">
                https://www.surveymonkey.com/r/QNCRRHN
            </a>
        </div>
    )
}

class SignUpForm extends React.Component {
    render() {
        return (
            <div className="enrollSignUpForm">
                <iframe className="enrollSignUpForm"
                src="https://docs.google.com/forms/d/e/1FAIpQLSda8mHJqKG-8THXKwB_gYJ0LLMF81-8tSpXEcITdaNZkJYupw/viewform?embedded=true" 
                width='90vw'
                frameBorder={0} 
                marginHeight={0} 
                marginWidth={0}>Loading Sign-up Form…</iframe>
            </div>
        )
    }
}