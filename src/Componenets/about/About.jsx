import React from 'react'
import './about.css'
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoMdCreate } from 'react-icons/io'
import { MdOutlinePublishedWithChanges } from 'react-icons/md'


const About = () => {
  return (
    <section id='about'>

      <div className='about_intro'>

        <h4>Learn More About Campus Connect</h4>

        <h1>About</h1>
      </div>

      <div className='about_container'>


        <article>
          <div className='about_icons'><IoMdCreate /></div>
          <div className='about_header'><h3>Write</h3></div>
          <p>
            Write about your life as a stduent and all the conmplexities that come with, share your journey with students around the world.
          </p>
        </article>


        <article>
          <div className='about_icons'><MdOutlinePublishedWithChanges /></div>
          <div className='about_header'><h3>Post</h3></div>
          <p>
            Publish your content and experince with and share qulaity time with your friends in Campus Connect.
          </p>
        </article>


        <article>
          <div className='about_icons'><BsCurrencyDollar /></div>
          <div className='about_header'><h3>Earn</h3></div>
          <p>
            Earn Crypto when you create and publish orginal posts and awesome contents on Campus Connect.
          </p>
        </article>




      </div>




    </section>

  )
}

export default About