import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 


const Navbar = () => {
    const [ click,setClick ] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

  return (
      <>
        <nav className='navbar'>
            <div className='container flex_space'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = { click ? ' fas fa-times ' : ' fas fa-bars ' }></i>
                </div>

                <ul className={ click ? 'nav-menu active ' : "nav-menu" }> 
                        <li><Link to='/' onClick={closeMobileMenu}> Home </Link></li>
                        <li><Link to='/about' onClick={closeMobileMenu}> About </Link></li>
                        <li><Link to='/gallery' onClick={closeMobileMenu}> Gallery</Link></li>
                        <li><Link to='/destination' onClick={closeMobileMenu}> Destination </Link></li>
                        <li><Link to='/blog' onClick={closeMobileMenu}> Blog </Link></li>
                        <li><Link to='/testimonials' onClick={closeMobileMenu}> Testimnials </Link></li>
                        <li><Link to='/contact' onClick={closeMobileMenu}> Contact Us </Link> </li>
                </ul>

                <div className='login-area flex'> 
                        <li>
                            <Link to='sign-in'>
                                <i className='fas fa-chevron-right'>Sign in</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='register'>
                                <i className=' fas fa-chevron-right '>Register</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='contact'>
                                <button className='primary-btn'> Request a Quote </button>
                            </Link>
                        </li> 
                </div>
            </div>
        </nav>

        <header>
            <div className='container flex_space'>
                <div className='logo'> 
                    <img alt='' src='Images\logo.png' />
                </div>

                <div className='contact flex_space'>
                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='far fa-clock'></i>
                        </div>
                        <div className='text'>
                            <h4>Working hours</h4>
                            <Link to='/contact'>
                                Monday - Sunday 9am to 6pm
                            </Link>
                        </div>
                    </div>

                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='fas fa-phone-volume'></i>
                        </div>
                        <div className='text'>
                            <h4>Call us</h4>
                            <Link to='/contact'>
                                +998 98 9898 898 898
                            </Link>
                        </div>
                    </div>

                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='far fa-envelope'></i>
                        </div>
                        <div className='text'>
                            <h4>Mail us</h4>
                            <Link to='/contact'>
                                info@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </>
 
  )
}

export default Navbar