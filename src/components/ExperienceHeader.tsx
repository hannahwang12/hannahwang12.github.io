import React, { CSSProperties } from 'react';
import './ExperienceHeader.css';

interface Props {
  imgSrc: string;
  imgStyle?: CSSProperties;
  company: string;
  position: string;
  dates: string;
}

const ExperienceHeader: React.FC<Props> = (props) => (
  <div className="experience-header">
    <img src={props.imgSrc} style={props.imgStyle} alt={props.company} />
    <div className="experience-header-text">
      <h2>{props.company}</h2>
      <h4>{props.position} | {props.dates}</h4>
    </div>
  </div>
);

export default ExperienceHeader;
