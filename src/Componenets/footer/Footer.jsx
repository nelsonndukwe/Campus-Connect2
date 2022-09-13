import React from 'react'
import './footer.css'
import {GrTwitter} from 'react-icons/gr'
import {FiGithub} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id='support'>


      <div className='fotter_container'>
      


        <ul className='footer_list' >
          <li>Github</li>
          <li>Blog</li>
          <li>Documentaion</li>
          <li>About Us</li>
          <li>Get Started</li>
          <li>Signup</li>
        </ul>



        <div className='socails_conatiner'>

        
        <a href='#'><GrTwitter /></a>
        <a href=''><FiGithub /></a>
        <a href=''><AiFillLinkedin /></a>


        </div>




      </div>
















    </section>

  )
}

export default Footer