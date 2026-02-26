import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navHeight = 70;

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  const toggleMenu = () => {
    setMobileMenu(prev => !prev);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  // Close menu safely after click
  const handleLinkClick = () => {
    setTimeout(() => {
      closeMenu();
    }, 300);
  };

  return (
    <>
      <nav className={sticky ? 'dark-nav' : ''}>
        
        <img src={logo} alt="logo" className='logo' />

        <ul className={mobileMenu ? 'active' : ''}>

          <li>
            <Link
              to="hero"
              smooth
              spy={true}
              offset={-navHeight}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="program"
              smooth
              spy={true}
              offset={-navHeight}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              Program
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth
              spy={true}
              offset={-navHeight}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="campus"
              smooth
              spy={true}
              offset={-navHeight}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              Campus
            </Link>
          </li>

          <li>
            <Link
              to="testimonials"
              smooth
              spy={true}
              offset={-navHeight}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth
              spy={true}
              offset={-navHeight}
              duration={500}
              className="btn"
              activeClass="active"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>

        </ul>

        {/* Hamburger */}
        <div
          className={`menu-icon ${mobileMenu ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>

      {mobileMenu && (
        <div className="overlay" onClick={closeMenu}></div>
      )}
    </>
  )
}

export default Navbar