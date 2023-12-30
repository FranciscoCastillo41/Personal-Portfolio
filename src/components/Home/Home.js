import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../Header/Header';
import './Home.css';

function Home() {
  return (
    <section className="home" id="home">
      <Header />
      <div className="main-container">
        <div className="container">
          <div className="heading">
            <span>Francisco Castillo</span>
            <h1 className="soft">software</h1>
            <span>Engineer</span>
            <p>Transforming Ideas into Innovations.</p>
            <div className="media">
              <ul>
                <li><a href="https://www.linkedin.com/in/francisco-castillo-218a67212/"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://github.com/FranciscoCastillo41"><i className="fab fa-github"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
