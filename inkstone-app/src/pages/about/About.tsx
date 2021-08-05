import { useTranslation } from 'react-i18next'
import './About.scss'
export default function About() {
    const { t, i18n } = useTranslation(['about'])

    // all image names and translation label names must use these names as root words, e.g. thomas.png, thomasName, thomasDesc
    const teamFounders = ['thomas', 'jay'] 
    const teamMembers = ['sophie', 'sasha', 'xavier', 'mia']
    const founders = teamFounders.map(f => ({
        teamMemberPhotoURL: f + '.png',
        teamMemberName: t('aboutTeam.aboutFounders.aboutFoundersNames.' + f + 'Name'),
        teamMemberDescription: t('aboutTeam.aboutFounders.aboutFoundersDescriptions.' + f + 'Desc')
    }))
    const members = teamMembers.map(f => ({
        teamMemberPhotoURL: f + '.png',
        teamMemberName: t('aboutTeam.aboutMembers.aboutMembersNames.' + f + 'Name'),
        teamMemberDescription: t('aboutTeam.aboutMembers.aboutMembersDescriptions.' + f + 'Desc')
    }))

    return (
        <div className="about">
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
                {props.teamMembers.map(teamMember => <TeamMemberBox key={teamMember.teamMemberName} {...teamMember}/>)}
            </div>
        </div>
    )
}

function TeamMemberBox(props: TeamMemberBoxProps) {
    return (
        <div className="aboutTeamMemberBox">
            <img className="aboutTeamMemberPhoto" alt={props.teamMemberName} src={'/images/about/' + props.teamMemberPhotoURL}/>
            <span className="aboutTeamMemberDescription">
                <span className="aboutTeamMemberDescriptionName">{props.teamMemberName}</span>{props.teamMemberDescription}
            </span>
        </div>
    )
}

declare interface TeamMemberGridProps {
    teamMembers: TeamMemberBoxProps[];
}

declare interface TeamMemberBoxProps {
    teamMemberName: string,
    teamMemberDescription: string,
    teamMemberPhotoURL: string
}