import React, { useState } from 'react'

const Slide = ({Slides}) => {
    const [ current , setCurrent ] = useState(0)
    const length = Slides.length

    const nextSlide = () => {
        setCurrent( current === length - 1 ? 0 : current + 1 )
    }

    const prevSlide = () => {
        setCurrent( current === 0 ? length - 1 : current - 1 )
    }

    if (!Array.isArray(Slides) || Slides.length <= 0){
        return null
    }

  return (
    <>
        <section className='slider'>
            <div className='control-btn'>
                <button className='prev' onClick={prevSlide}>
                    <i className='fas fa-caret-left'></i>
                </button>
                <button className='next' onClick={nextSlide}>
                    <i className='fas fa-caret-right'></i>
                </button>
            </div>
            {
                Slides.map((slide,index)=> {
                    return <div className={ index === current ? 'slide active' : 'slide' } key={index}>
                        { index === current && <img src={slide.image} alt='Home page' /> }
                    </div>
                })
            }
        </section>
        <section className='slide-form'>
            <div className='container'>
                <h2>Enjoy your holiday</h2>
                <span>Search and Book Hotel</span>
                <form>
                    <input type='text' placeholder='search'/>
                    <div className='flex_space'>
                        <input type='date' placeholder='Check In'/>
                        <input type='date' placeholder='Check Out'/>
                    </div>
                    <div className='flex_space'>
                        <input type='number' placeholder='Adult(s)(18+)'/>
                        <input type='number' placeholder='Child(ren)(0 - 17)'/>
                    </div>
                    <input type='number' placeholder='Rooms'/>
                    <input type='submit' className='submit' value='submit'/>
                </form>
            </div>
        </section>




    </>
  )
}

export default Slide