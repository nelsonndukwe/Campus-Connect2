import React from 'react'
import './partners.css'
import Steemit from '../../assets/steemit.jpg'
import Binance from '../../assets/binance.jpg'
import Poloniex from '../../assets/poloniex.jpg'
import Blurt from '../../assets/Blurtlogo.png'


const Partners = () => {
  return (
    <section id=''>

      <div className='about_intro'>

        <h4>Who are Our </h4>

        <h1>Partners</h1>
      </div>




      <div className='partners_container'>

        <div className='partners_logos'>
          <img className='partners_logo_image' src={Steemit} />

        </div>

        <div className='partners_logos'>
          <img className='partners_logo_image' src={Binance} />

        </div>

        <div className='partners_logos'>
          <img className='partners_logo_image' src={Poloniex} />

        </div>

        <div className='partners_logos'>
          <img className='partners_logo_image' src={Blurt} />

        </div>


      </div>



      <div className='partners_container'>

        <div className='partners_logos'>
          <img className='partners_logo_image' src={Steemit} />

        </div>

        <div className='partners_logos'>
          <img className='partners_logo_image' src={Binance} />

        </div>

        <div className='partners_logos'>
          <img className='partners_logo_image' src={Poloniex} />

        </div>

        <div className='partners_logos'>
          <img className='partners_logo_image' src={Blurt} />

        </div>


      </div>


    </section>
  )
}

export default Partners