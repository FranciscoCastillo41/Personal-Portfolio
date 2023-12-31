import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <h1>Contact me at <span className='contact'>frajcastillo@gmail.com</span></h1>
      <div className="icons">
        <a href="https://github.com/FranciscoCastillo41"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/francisco-castillo-218a67212/"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
