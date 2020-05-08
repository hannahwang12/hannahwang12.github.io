import React from 'react';
import { Mail, Linkedin, GitHub, FileText } from 'react-feather';
import { Resume, Hannah } from '../assets';
import './About.css';

const languages: string[] = ['Python', 'Go', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'C', 'C++', 'SQL']
const tools: string[] = ['Django', 'NodeJS', 'React', 'React Native', 'Redux',  'Vue.js', 'MongoDB', 'Neo4J', 'PostgreSQL', 'Google Cloud Platform', 'Git']

const About: React.FC = () => {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <img src={Hannah} className="profile-pic" />
        <div>
          <h3>Hello!</h3>
          <p>I'm Hannah and I'm a third-year student at the University of Waterloo in the Computer Science and Business Administration Double Degree program.
            I'm experienced in full-stack development and I enjoy constantly learning new things through working on personal projects and attending hackathons!</p>
          <div className="icons">
            <a href="mailto:hannah.wang@uwaterloo.ca"><Mail className="icon" /></a>
            <a href="https://www.linkedin.com/in/hannahwang" target="_blank" rel="noopener noreferrer"><Linkedin className="icon" /></a>
            <a href="https://github.com/hannahwang12" target="_blank" rel="noopener noreferrer"><GitHub className="icon" /></a>
            <a href={Resume} target="_blank"><FileText className="icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;