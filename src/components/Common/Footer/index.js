import React from 'react'
import './style.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
    <h2>crypto tracker . 
   
    </h2>

    <span>
    <a href='https://www.instagram.com/'> <InstagramIcon/></a>
    <a href='https://github.com/kalashtayal'> <GitHubIcon/></a>
    <a href='https://www.linkedin.com/feed/?trk=404_page'> <LinkedInIcon/></a>
      
    </span>
    </div>
  )
}

export default Footer;
