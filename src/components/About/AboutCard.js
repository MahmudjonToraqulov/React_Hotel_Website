import React from 'react'

const AboutCard = () => {
  return (
    <>
        <div className='aboutCard mtop flex_space'>
            <div className='row row1'>
                <h4> About Us </h4>
                <h1>
                    We - <span> Provide solution </span> to grow your bussiness!
                </h1>
                <p> Lorem sa sfafa Lorem sa sfafa Lorem sa sfafa Lorem sa sfafa  </p>
                <p> Lorem sa sfafa Lorem sa sfafa Lorem sa sfafa Lorem sa sfafa  </p>
                <button className='secondary-btn'>
                    Explore More <i className='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
            <div className='row image'>
                <img src='/images/about-img-1.jpg' />
                <div className='control-btn '>
                    <button className='prev'>
                        <i className='fas fa-play'></i>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutCard