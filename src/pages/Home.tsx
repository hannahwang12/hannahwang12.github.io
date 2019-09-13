import React from 'react';
import { Mail, Linkedin, GitHub, FileText } from 'react-feather';
import { Resume } from '../assets';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1>Hannah Wang</h1>
        <div className="icons">
          <a href="mailto:hannah.wang@uwaterloo.ca"><Mail className="icon" /></a>
          <a href="https://www.linkedin.com/in/hannahwang" target="_blank" rel="noopener noreferrer"><Linkedin className="icon" /></a>
          <a href="https://github.com/hannahwang12" target="_blank" rel="noopener noreferrer"><GitHub className="icon" /></a>
          <a href={Resume} target="_blank" rel="noopener noreferrer"><FileText className="icon" /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;