import React from 'react';
import './Skills.css'

function Skills() {
  return (
    <section className="skills reveal" id="skills">
      <h1>Skills</h1>
      <p className="p-skills">Below are some of the skills I have acquired throughout my career.</p>

      <div className="container">
        <div className="skill">
          <i className="fab fa-cuttlefish fa-2x"></i>
          <p>C++</p>
        </div>
        <div className="skill">
          <i className="fab fa-java fa-2x"></i>
          <p>Java</p>
        </div>
        <div className="skill">
          <i className="fab fa-python fa-2x"></i>
          <p>Python</p>
        </div>
        <div className="skill">
          <i className="fab fa-html5 fa-2x"></i>
          <p>HTML</p>
        </div>
        <div className="skill">
          <i className="fab fa-css3-alt fa-2x"></i>
          <p>CSS</p>
        </div>
        <div className="skill">
          <i className="fab fa-js fa-2x"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <i className="fab fa-react fa-2x"></i>
          <p>React.js</p>
        </div>
        <div className="skill">
          <i className="fas fa-database fa-2x"></i>
          <p>MySQL</p>
        </div>
        <div className="skill">
          <i className="fab fa-php fa-2x"></i>
          <p>PHP</p>
        </div>
        <div className="skill">
          <i className="fab fa-android fa-2x"></i>
          <p>Android</p>
        </div>
        <div className="skill">
          <i className="fab fa-aws fa-2x"></i>
          <p>AWS</p>
        </div>
        <div className="skill">
          <i className="fab fa-firefox fa-2x"></i>
          <p>Firebase</p>
        </div>
        <div className="skill">
          <i className="fas fa-calculator fa-2x"></i>
          <p>MATLAB</p>
        </div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
}

export default Skills;
