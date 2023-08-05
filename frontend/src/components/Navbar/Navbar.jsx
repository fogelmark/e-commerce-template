import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { BsQuestionCircle, BsCart3, BsPersonCircle, BsSearch, BsHeart } from "react-icons/bs";

const Navbar = ({ toggleOverlay }) => {

  const [isOpen, setIsOpen] = useState(false)

  
  const handleToggle = () => {
    setIsOpen(state => !state)
    toggleOverlay()
  }
  
  useEffect(() => {
  }, [])

  return (
    <div className='nav-content'>
      <nav className={`nav-left ${isOpen ? 'show' : ''}`}>
        <ul className='nav-list links'>
          <li className='nav-item'>
            WOMEN
          </li>
          <li className='nav-item'>
            MEN
          </li>
          <li className='nav-item'>
            SALE
          </li>
          <li className='nav-item'>
            BRANDS
          </li>
          <li className='nav-item'>
            NEW RELEASES
          </li>
          <li className='nav-item'>
            LOGIN
          </li>
          <li className='nav-item'>
            HELP
          </li>
        </ul>
      </nav>
        <input type="checkbox" id="checkbox" onClick={handleToggle} />
        <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
        </label>
        <div className='brand-text'>21 Sneaker Street</div>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item icon'>
            <BsSearch />
          </li>
          <li className='nav-item icon'>
            <BsPersonCircle />
          </li>
          <li className='nav-item icon'>
            <BsQuestionCircle />
          </li>
          <li className='nav-item icon'>
            <BsCart3 />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar