import React from 'react';
import { Timeline } from 'antd';
import Consensys from '../assets/images/consensys.png';
import Blueprint from '../assets/images/blueprint.png';
import Hubdoc from '../assets/images/hubdoc.jpg';
import './Experience.css';

const { Item } = Timeline;

const Experience: React.FC = () => {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <Timeline>
        <Item dot={<img className="timeline-dot" src={Consensys} />}>
          <h2>ConsenSys</h2>
          <h4>Full Stack Developer | Jan 2019 - Apr 2019</h4>
          <ul>
            <li>
              Built and optimized NodeJS/Express API endpoints and queries to MongoDB and Neo4J databases,
              including 25% reduction in initial load time
            </li>
            <li>
              Developed major frontend features in React and Redux for the core product used by thousands of clients
            </li>
            <li>
              Implemented integral new functionality end-to-end, involving overall technical design,
              database architecture, and full stack development
            </li>
          </ul>
        </Item>
        <Item dot={<img className="timeline-dot blueprint" src={Blueprint} />}>
          <h2>UW Blueprint</h2>
          <h4>Project Developer | Sep 2018 - Apr 2019</h4>
          <ul>
            <li>
              Developed a React Native photo-taking app
              for <a className="link" href="https://bestfriends.org/" target="_blank" rel="noopener noreferrer">Best Friends Animal Society</a> to
              ensure high quality photos, increasing the likelihood of animal adoption
            </li>
            <li>
              Developed a React web app with MongoDB to streamline the appointment scheduling process
              at <a className="link" href="https://www.kidsability.ca/" target="_blank" rel="noopener noreferrer">KidsAbility Centre for Child Development</a>
            </li>
          </ul>
        </Item>
        <Item dot={<img className="timeline-dot" src={Hubdoc} />}>
          <h2>Hubdoc</h2>
          <h4>Software Developer | May 2018 - Aug 2018</h4>
          <ul>
            <li>
              Built, maintained, and debugged 700+ microservices to automatically fetch financial documents
              from banks and vendors using NodeJS; increased overall success rate by 7% and achieved 2-year high
            </li>
            <li>
              Refactored 4000+ lines of code to improve efficiency and maintainability
            </li>
            <li>
              Implemented new features on company intranet to enhance data visualization using Backbone.js and PostgreSQL
            </li>
          </ul>
        </Item>
      </Timeline>
    </div>
  );
}

export default Experience;