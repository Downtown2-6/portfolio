import React from 'react'
import Instagram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Twitter />
        <Instagram  />
      </div>
      <p>&copy; 2023 tamimfares.com</p>
    </div>
  )
}

export default Footer
