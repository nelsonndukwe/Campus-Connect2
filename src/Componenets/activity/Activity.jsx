import React from 'react'
import './activity.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Arinze from '../../assets/avatar2.jpg'
import Dayo from '../../assets/avatar3.jpg'
import AVAT4 from '../../assets/avatar4.jpg'
import Nelson from '../../assets/avatar1.jpg'


const Activity = () => {
    return (

        <section id='projects'>

            <div className='about_intro'>

                <h4>Learn About Our Projects In Diffrent Universties In Nigeria</h4>

                <h1>Projects</h1>
            </div>

            <Swiper className='conatiner testimonail_conatiner'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >

                <SwiperSlide className='testimonail'>

                    <div className='client_avater'>
                        <img src={Arinze} alt='Avater one' />
                    </div>
                    <h3 className='client_name'>Marvel</h3>
                    <large className='client_review'>
                        Working with Nelson as a Frontend developer on our groove project has proved to be a spectauclar experince as a result of his insane work ethic and vivalious sense of humour.
                    </large>

                </SwiperSlide>


                <SwiperSlide className='testimonail'>

                    <div className='client_avater'>
                        <img src={Dayo} alt='Avater one' />
                    </div>
                    <h3 className='client_name'>Marvel</h3>
                    <large className='client_review'>
                        Working with Nelson as a Frontend developer on our groove project has proved to be a spectauclar experince as a result of his insane work ethic and vivalious sense of humour.
                    </large>

                </SwiperSlide>



                <SwiperSlide className='testimonail'>

                    <div className='client_avater'>
                        <img src={AVAT4} alt='Avater one' />
                    </div>
                    <h3 className='client_name'>Marvel</h3>
                    <large className='client_review'>
                        Working with Nelson as a Frontend developer on our groove project has proved to be a spectauclar experince as a result of his insane work ethic and vivalious sense of humour.
                    </large>

                </SwiperSlide>


                <SwiperSlide className='testimonail'>

                    <div className='client_avater'>
                        <img src={Nelson} alt='Avater one' />
                    </div>
                    <h3 className='client_name'>Marvel</h3>
                    <large className='client_review'>
                        Working with Nelson as a Frontend developer on our groove project has proved to be a spectauclar experince as a result of his insane work ethic and vivalious sense of humour.
                    </large>

                </SwiperSlide>

                





            </Swiper>






        </section>
    )
}

export default Activity