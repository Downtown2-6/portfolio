import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import MilitaryIcon from '@mui/icons-material/MilitaryTech'
import WorkIcon from '@mui/icons-material/DesktopWindows'
import CelebrationIcon from '@mui/icons-material/Celebration';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--military'
          date='2005-2016'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<MilitaryIcon />}
        >
        <h3>U.S. Army</h3>
        <p>RTO</p>
        <ul>
          <li>Subject matter expert on all forms of digital
              and analog communications</li>
          <li>Responsible for loading cryptologic keys</li>
          <li>Responsible for maintenance and
              accountability of over 1mm in equipment</li>
          <li>Held security clearance</li>
        </ul>
        <p>Squad Leader</p>
        <ul>
          <li>Responsible for the welfare of a nine man Infantry squad</li>
          <li>Planned and executed missions in
              dynamic and austere environment</li>
          <li>Supervised training and created/disseminated
              administrative documents</li>
        </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2016-2021'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<WorkIcon />}
        >
        <h3>Law Offices of Debbi Sabin Esq.</h3>
        <p>IT Support Technician</p>
        <ul>
          <li>Assisted with software and hardware issues</li>
          <li>Installed drivers and upgraded windows OS</li>
          <li>Debugged issues with mobile devices to include iPhone/iPad</li>
          <li>Designed wirless network schema to i
              mprove device connectivity and range</li>
          <li>Helped with general administrative tasks</li>
        </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<SchoolIcon />}
        >
        <h3>Hudson Valley Community College, Troy, NY</h3>
        <p>A.S. Computer Information Systems</p>
        <ul>
          <li>Focus on Java and Assembly</li>
          <li>Familiar with networking fundimentals</li>
          <li>Familiar with Linux operating system</li>
        </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021-2023'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<WorkIcon />}
        >
        <h3>Zones nFrastructure</h3>
        <p>Microsoft 365 Support Team Lead</p>
        <ul>
          <li>Led ten person team of tier 2 IT support agents</li>
          <li>Interacted with 250+ unique customers weekly</li>
          <li>Created and administered training documnetation
              and tracked key metrics/KPIs</li>
          <li>Prepped cases for escalation and communicated with
              international business partners</li>
          <li>First point of contact for any issues that
              fell outside the purview of the frontline agents</li>
        </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2023'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<SchoolIcon />}
        >
        <h3>Fullstack Academy</h3>
        <p>Full Stack Developer, Computer Software Engineering </p>
        <ul>
          <li>Deep understanding of object-oriented
              and functional programming</li>
          <li>Proficient in front-end technologies to include
              React.js, HTML, CSS, MaterialUI, use of APIs</li>
          <li>Proficient in middleware/back-end technologies to
              include Express, Node.js, Sequelize, PostgreSQL</li>
          <li>Mastery of devloper tools to include Git, NPM,
              Bash, Postman, browser dev tools etc.</li>
        </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2023'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<CelebrationIcon />}
        >
        <h3>Looking for Work</h3>
        <p>Seeking Employment as Web Designer or Software Developer</p>
        <ul>
          <li>Currently looking for work as a designer or developer
               where I can showcase my skills while learning new ones!</li>
          <li>Looking forward to working as a member of a dedicated
              team of professionals who are all striving toward a common
              goal</li>
        </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
     </div>
  )
}

export default Experience
