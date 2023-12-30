import React, { useEffect } from 'react';
import './Header.css';

function Header() {
  useEffect(() => {
    const menu = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.header .navbar');
    const header = document.querySelector('.header');

    const handleMenuClick = () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    };

    const handleScroll = () => {
      const top = window.scrollY;
      if (top >= 100) {
        header.classList.add('active_h');
      } else {
        header.classList.remove('active_h');
      }
    };

    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    menu.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', reveal);

    // Clean up event listeners when the component unmounts
    return () => {
      menu.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', reveal);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <header className="header">
      <span className="logo"><a href="#home">F. Castillo</a></span>
      <div id="menu-btn" className="fas fa-bars"></div>
      <nav className="navbar">
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  );
}

export default Header;
