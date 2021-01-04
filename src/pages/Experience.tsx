import React from 'react';
import ExperienceHeader from '../components/ExperienceHeader';
import { Collapse } from 'antd';
import JaneStreet from '../assets/images/jane_street.png';
import Postmates from '../assets/images/postmates.png';
import Consensys from '../assets/images/consensys.png';
import Blueprint from '../assets/images/blueprint.png';
import Hubdoc from '../assets/images/hubdoc.jpg';
import './Experience.css';

const { Panel } = Collapse;

const Experience: React.FC = () => {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <Collapse bordered={false}>
        <Panel
          key="1"
          showArrow={false}
          header={
            <ExperienceHeader
              imgSrc={JaneStreet}
              imgStyle={{ padding: "6px" }}
              company="Jane Street"
              position="Software Engineering Intern"
              dates="Sep 2020 - Dec 2020"
            />
          }
        >
          <ul>
            <li>
              Designed and built a dependencies graph UI and data visualisation tool for a large-scale distributed computation system
              in OCaml, used by engineers and traders for training, development, and debugging
            </li>
            <li>
              Developed an automated workflow that enables repurchase agreements to be recorded in Excel and materialised in a
              PostgreSQL database using OCaml and Kafka, improving the scalability and effectiveness of financing operations
            </li>
          </ul>
        </Panel>
        <Panel
          key="2"
          showArrow={false}
          header={<ExperienceHeader imgSrc={Postmates} company="Postmates" position="Software Engineering Intern" dates="Jan 2020 - Apr 2020" />}
        >
          <p>I was part of the Buyer Team which works on all aspects of the customer-facing Postmates app.</p>
          <ul>
            <li>
              Engineered a new “in-seat delivery” flow using Go, Python/Django, and Google Cloud Platform to enable Postmates
              to be used at stadium events; built admin configuration UI in React for easy scalability to various venues
            </li>
            <li>
              Investigated data issues and improved code logic relating to subscriptions to reconcile data and increase revenue
              by $120K per month
            </li>
            <li>
              Built functionality to redeem promotions based on payment method and send communications to users containing
              third-party promo codes, to enable a $600K-value promotion in partnership with Apple TV and Apple Pay
            </li>
            <li>
              Developed features, built experiments, and fixed bugs in Go and Python/Django in areas such as feed and SMS messaging
              to enhance customer experience and drive conversion, including a 24% increase in membership signups
            </li>
          </ul>
        </Panel>
        <Panel
          key="3"
          showArrow={false}
          header={<ExperienceHeader imgSrc={Consensys} company="ConsenSys" position="Full Stack Developer Intern" dates="Jan 2019 - Apr 2019" />}
        >
          <p>
            Within ConsenSys, I worked on <a className="link" href="https://sobol.io/" target="_blank" rel="noopener noreferrer">Sobol</a>,
            a platform built upon modern paradigms of work for organizations to map their team structures and to enhance collaboration.
          </p>
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
        </Panel>
        <Panel
          key="4"
          showArrow={false}
          header={
            <ExperienceHeader
              imgSrc={Blueprint}
              imgStyle={{ padding: "6px" }}
              company="UW Blueprint"
              position="Project Developer"
              dates="Sep 2018 - Apr 2019"
            />
          }
        >
          <p>
            <a className="link" href="https://uwblueprint.org/" target="_blank" rel="noopener noreferrer">UW Blueprint</a> partners with
            not-for-profit organizations to build technology solutions for social good.</p>
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
        </Panel>
        <Panel
          key="5"
          showArrow={false}
          header={<ExperienceHeader imgSrc={Hubdoc} company="Hubdoc" position="Software Developer Intern" dates="May 2018 - Aug 2018" />}
        >
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
        </Panel>
      </Collapse>
    </div>
  )
}

export default Experience;