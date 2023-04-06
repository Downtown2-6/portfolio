import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectList } from '../helpers/ProjectList'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'></div>
      {projectList.map((project) => {
        return <ProjectItem  name={project.name} image={project.image}/>
      })}
    </div>
  )
}

export default Projects
