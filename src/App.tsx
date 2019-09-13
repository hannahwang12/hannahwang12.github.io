import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import { Resume } from './assets';
import { Menu as MenuIcon } from 'react-feather'
import { Menu, Dropdown} from 'antd';
import { Mail, Linkedin, GitHub } from 'react-feather';
import './App.css';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item><a href="#">Home</a></Menu.Item>
      <Menu.Item><a href="#about">About Me</a></Menu.Item>
      <Menu.Item><a href="#experience">Experience</a></Menu.Item>
      <Menu.Item><a href="#projects">Projects</a></Menu.Item>
      <Menu.Item><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></Menu.Item>
    </Menu>
  );
  return (
    <div className="App">
      <Dropdown overlay={menu} className="hamburger" overlayClassName="overlay">
        <a><MenuIcon /></a>
      </Dropdown>
      <Menu />
      <Home />
      <About />
      <Experience />
      <Projects />
      <div className="bottom-bar">
        <div>&copy; Hannah Wang 2019</div>
        <div className="icons">
          <a href="mailto:hannah.wang@uwaterloo.ca"><Mail className="icon" /></a>
          <a href="https://www.linkedin.com/in/hannahwang" target="_blank" rel="noopener noreferrer"><Linkedin className="icon" /></a>
          <a href="https://github.com/hannahwang12" target="_blank" rel="noopener noreferrer"><GitHub className="icon" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
