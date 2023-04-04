import React from 'react'
import { IconButton, Link } from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import Email from '@material-ui/icons/Email'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hello, My Name is Tamim</h2>
        <div className='prompt'>
          <p>
            A software designer, leader, and writer with a passion for telling meaningful stories and creating beautiful products.
          </p>
          <IconButton>
            <Link href="https://www.linkedin.com/in/tamim-fares/" target="_blank" rel="noopener">
              <LinkedIn />
            </Link>
          </IconButton>
          <IconButton>
            <Link href='https://github.com/Downtown2-6/' target="_blank" rel="noopener">
              <GitHub />
            </Link>
          </IconButton>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              React.js, Redux, HTML, CSS, React Native, MaterialUI,
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              Node.js, Express, Sequelize, PostgreSQL, NPM
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Assembly
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
