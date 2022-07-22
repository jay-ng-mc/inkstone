import { stdout } from 'process'
import { useTranslation } from 'react-i18next'
import './About.scss'
export default function About() {
    const { t } = useTranslation(['about'])

    function buildMemberTranslation(k: string) {
        const preString = `aboutTeam.aboutMembers.${k}`
        const translation = {
            name: t(`${preString}.name`),
            profession: t(`${preString}.profession`),
            master: t(`${preString}.master`),
            bachelor: t(`${preString}.bachelor`),
            experience: t(`${preString}.experience`),
            photoURL: `${k}.png`
        }
        return (translation)
    }
    // all image names and translation label names must use these names as root words, e.g. thomas.png, thomasName, thomasDesc
    const teamFounders = ['thomas', 'jay'] 
    const teamMembers = ['sophie', 'sasha', 'xavier', 'mia']
    const founders = teamFounders.map(k => buildMemberTranslation(k))
    const members = teamMembers.map(k => buildMemberTranslation(k))

    return (
        <div className="about">
            <div className="aboutTeamHeader">{t('aboutTeamHeaders.aboutUs')}</div>
            <div className="aboutTeamDescription">{t('aboutTeam.aboutUs')}</div>
            <div className="aboutTeamHeader">{t('aboutTeamHeaders.aboutFounders')}</div>
            <TeamMemberGrid teamMembers={founders}/>
            <div className="aboutTeamHeader">{t('aboutTeamHeaders.aboutMembers')}</div>
            <TeamMemberGrid teamMembers={members}/>
        </div>
    )
}

function TeamMemberGrid(props: TeamMemberGridProps) {
    return (
        <div className="aboutTeamMemberGrid">
            <div className="aboutTeamMemberPanel">
                {props.teamMembers.map(teamMember => <TeamMemberBox key={teamMember.name} {...teamMember}/>)}
            </div>
        </div>
    )
}

function TeamMemberBox(props: TeamMemberBoxProps) {
    return (
        <div className="aboutTeamMemberBox">
            <img className="aboutTeamMemberPhoto" alt={props.name} src={require('../../images/about/' + props.photoURL)}/>
            <div className="aboutTeamMemberDescription">
                <div className="aboutTeamMemberDescriptionName">{props.name}</div>
                <ul>
                    {props.profession?<li>{props.profession}</li>:null}
                    {props.master?<li>{props.master}</li>:null}
                    <li>{props.bachelor}</li>
                    <li>{props.experience}</li>
                </ul>
            </div>
        </div>
    )
}

declare interface TeamMemberGridProps {
    teamMembers: TeamMemberBoxProps[];
}

declare interface TeamMemberBoxProps {
    name: string,
    profession: string,
    master: string,
    bachelor: string,
    experience: string,
    photoURL: string
}