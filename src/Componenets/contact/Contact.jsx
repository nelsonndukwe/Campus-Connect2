import React from 'react'
import './contact.css'
import { MdMarkEmailUnread } from 'react-icons/md'
import { SiSteemit } from 'react-icons/si'
import { ImWhatsapp } from 'react-icons/im'






const Contact = () => {


  return (
    <section id='contact'>

      <div className='about_intro'>

        <h4>Join Our Amazing Community</h4>

        <h1>Send A Message</h1>
      </div>

      <div className=' contact_container' >

        <div className='contact_options'>

          <div className='contact_option'>
            <MdMarkEmailUnread className='contact_option-icon' />
            <h4>Email</h4>
            <h5 className='contact_option-name'>Nelsonndukwe800@gmail.com</h5>
            <a href='mailto:Nelsonndukwe800@gmail.com' target='_blank'>Send a Message</a>


          </div>

          <div className='contact_option'>
            <ImWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5 className='contact_option-name'>09064035138</h5>
            <a href='https://api.whatsapp.com/send?phone=+2349064035138' target='_blank'>Send a Message</a>


          </div>


          <div className='contact_option'>
            <SiSteemit className='contact_option-icon' />
            <h4>Steemit</h4>
            <h5 className='contact_option-name'>Whitestallion</h5>
            <a href='https://steemit.com/@whitestallion/posts' target='_blank'>Visit My Blog</a>


          </div>
        </div>

        

        <form >

          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type="submit" className='contact_btn'>Send Message</button>





        </form>








      </div>



    </section>
  )

}

export default Contact