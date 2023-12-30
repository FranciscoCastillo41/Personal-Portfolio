import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects reveal" id="projects">
      <h1>Projects</h1>
      <p>Check out some of my recent work.</p>
      <div className="container">
        <div className="project">
          <i className="fas fa-plane fa-2x"></i>
          <h2>Traveling Web Application</h2>
          <p>
            A React.js full-stack application with Firebase/Firestore,
            providing an immersive experience for travel enthusiasts. Explore
            destinations, plan your trips, and share your adventures with
            others.
          </p>
          <button type="submit" className="view-btn">
            View
          </button>
        </div>
        <div className="project">
          <i className="fas fa-heart fa-2x"></i>
          <h2>Android Dating App</h2>
          <p>
            An Android dating application developed using Android Studio with
            Java. The app leverages Firebase and Firestore for real-time data
            storage and communication. Connect with others, discover matches,
            and build meaningful connections in the world of mobile dating.
          </p>
          <button type="submit" className="view-btn">
            View
          </button>
        </div>
        <div className="project">
          <i className="fas fa-spider fa-2x"></i>
          <h2>Social Media Web Crawler</h2>
          <p>
            Contributed to a Python-based web crawler for social media analysis,
            implementing APIs like Computer Vision for data enrichment. Applied
            machine learning and data science for insightful predictions,
            co-authoring a research paper accepted at The Intelligent
            Cybersecurity Conference
          </p>
          <button type="submit" className="view-btn">
            View
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
