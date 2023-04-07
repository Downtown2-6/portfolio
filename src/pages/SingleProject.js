import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'

function SingleProject() {
  const { id } = useParams()
  const project = projectList[id]

  return (
    <div>SingleProject
      <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt='Grace Shopper'/>
      </div>
    </div>

  )
}

export default SingleProject
