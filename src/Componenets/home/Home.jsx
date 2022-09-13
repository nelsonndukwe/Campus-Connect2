import React from 'react'
import './home.css'
import MainImage from '../../assets/avatar1.jpg'


const Home = () => {
  return (

    <header className='home'>
      <div className='container main_home-container'>
        <div className='main_home-left'>
          <h4 className='home_h4'>Join A Decentralized Community Of College Students</h4>
          <h1 className='home_h1'>CAMPUS  CONNECT</h1>
          <button className='home_btn'><a href='#'><h3 className='text_btn'>Join Campus Connect</h3></a></button>
        </div>

        <div className='main_home-right'>

          <div >
            <img className='main_header-image' src={MainImage} />
          </div>



        </div>
      </div>




    </header>




  )
}

export default Home