import { useState } from "react"
import "./Gallery.css"

function Card({image,title}) {
    const [ popup ,setPopup ] = useState(false)

    const toggleModal = ()=>{
        setPopup(!popup)
    }
  return (
    <>
        <div className='items'>
            <div className='img' onClick={toggleModal}>
                <img src={image} alt='' />
                <i className='fas fa-image'></i>
            </div>
            <div className='title'>
                <h3> {title} </h3>
            </div>
        </div>
        { 
            popup &&  (<div className='popup'>
                <div className='hide'>
                    <div className='popup-content'>
                        <button onClick={toggleModal}>Close</button>
                        <img src={image} alt='' />
                    </div>
                </div>
            </div>
        )}
    </ >
  )
}

export default Card