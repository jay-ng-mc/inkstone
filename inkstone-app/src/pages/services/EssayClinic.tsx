import { useTranslation } from "react-i18next"
import './EssayClinic.scss'

export default function EssayClinic() {
    const { t } = useTranslation('services')
    return (
        <div className="essayClinic">
            <div className="essayClinicHeader">{t('essayClinic.header')}</div>
            <div className="essayClinicText">{t('essayClinic.text')}</div>
        </div>
    )
}