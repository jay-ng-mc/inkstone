import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import services from '../../translations/en/services.json'
import './ServicesList.scss'

export default function ServicesList() {
    const { t } = useTranslation(['services'])
    const services_list = Object.entries(services.servicesList.servicesListItems)
    return(
        <div className="servicesListComponent">
            <div className="servicesListItems">
                {
                    services_list.map(e => <ServicesListItem key={e[0]} k={e[0]} t={t}/>)
                }
            </div>
            {/* <ServicesListSeeMore t={t}/> */}
        </div>
    )
}

function ServicesListItem(props: ServicesListItemProps) {
    return (
        <Link to={props.k}>
            <div className="servicesListItemBox">
                <div className="servicesListItem">
                    <img className="servicesListItemLogo" src={require("../../images/services/" + props.k + "Logo.svg").default} alt={props.k}/>
                    <div className="servicesListItemText">{props.t("servicesList.servicesListItems." + props.k)}</div>
                </div>
            </div>
        </Link>
    )
}

// function ServicesListSeeMore(props: {t: any}) {
//     return(
//         <Link to="services" className="servicesListSeeMore">
//                 {props.t('servicesList.servicesListSeeMore')}
//         </Link>
//     )
// }

type ServicesListItemProps = {
    k: string, // key of serviceItem in the json object
    t: any // translate function
}