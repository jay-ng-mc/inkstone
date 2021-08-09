import { useTranslation } from 'react-i18next'
import './Placeholder.scss'

export default function Placeholder() {
    const { t } = useTranslation('placeholder')
    return (
        <div className="placeholder">
            <div className="placeholderHeader">{t('maintenanceHeader')}</div>
            <div className="placeholderText">{t('maintenanceText')}</div>
        </div>
    )
}