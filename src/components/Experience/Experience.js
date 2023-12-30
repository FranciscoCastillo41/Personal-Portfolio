import React from 'react';
import './Experience.css';
import '../../App.css'; 

function Experience() {
  return (
    <section className="experience reveal" id="experience">
      <h1>Experience</h1>
      <div className="experience-item">
        <h3>Testing and Machine Learning Research Intern</h3>
        <p className="company">University of North Texas - Denton, Texas</p>
        <span className="date">May 2023 - July 2023</span>
        <p>
          Conducted research on testing methods, emphasizing machine learning for context-driven systems. Collaborated in a multidisciplinary team to develop a Python-based social media webcrawler, engineered for efficient project management. Analyzed Twitter data to identify potential illicit drug sales, utilizing machine learning to enhance risk assessment. Contributed to an official research paper published at The Intelligent Cybersecurity Conference.
        </p>
      </div>
      <div className="experience-item">
        <h3>Data Science Research Intern</h3>
        <p className="company">Southern Methodist University - Dallas, Texas</p>
        <span className="date">June 2022 - July 2022</span>
        <p>
          Designed and executed an extensive research project focused on the voting system in Dallas County, utilizing a data-driven approach to tackle crucial issues. Employed Python and ArcGIS to gather, clean, and analyze data, ensuring precision and reliability within the project's scope. Created interactive maps with ArcGIS to visually convey research findings, making intricate data more accessible to a broader audience.
        </p>
      </div>
      {/* Add more experience items as needed */}
    </section>
  );
}

export default Experience;
