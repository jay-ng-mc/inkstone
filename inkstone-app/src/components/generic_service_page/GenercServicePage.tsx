import { useTranslation } from "react-i18next"
import './GenericServicePage.scss'

export default function GenericServicePage(props: {pageName: string}) {
    const { t } = useTranslation('services')
    return (
        <div className="genericServicePage">
            <div className="genericServicePageHeader">{t(`${props.pageName}.header`)}</div>
            <div className="genericServicePageText">{t(`${props.pageName}.text`)}</div>
        </div>
    )
}