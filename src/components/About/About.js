import React from 'react'
import AboutCard from './AboutCard'
import './About.css'
import HeadTitle from '../../common/HeadTitle/HeadTitle'

const About = () => {
  return (
    <>
        <HeadTitle />
        <section className='about top'>
            <div className='container'>
                <AboutCard />
            </div>
        </section>

        <section className='features top'>
            <div className='container aboutCard flex_space'>
                <div className='row row1'>
                    <h1>
                        Our <span> Features </span>
                    </h1>
                    <p> Lorem sa sfafa Lorem sa sfafa Lorem sa sfafa Lorem sa sfafa  </p>
                    <p> Lorem sa sfafa Lorem sa sfafa Lorem sa sfafa Lorem sa sfafa  </p>
                    <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                
                <div className='row image'>
                    <img src='/images/feature-img-1.jpg' />
                    <div className='control-btn '>
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About