import React from 'react';
import { Card, Carousel, Tag } from 'antd';
import { GitHub, Monitor, Award } from 'react-feather';
import { CodingProject } from '../pages/Projects';

interface CodingProjectCardProps {
  item: CodingProject
};

const CodingProjectCard: React.FC<CodingProjectCardProps> = (props) => {
  const carousel = React.createRef<Carousel>();
  const { item } = props;
  return (
    <Card
      onMouseEnter={() => {
        carousel.current!.next();
        carousel.current!.innerSlider.autoPlay();
      }}
      onMouseLeave={() => {
        carousel.current!.goTo(0);
        carousel.current!.innerSlider.pause();
      }}
      cover={
        <Carousel ref={carousel}>
          {item.cover.map((img: any) => <img src={img} />)}
        </Carousel>
      }
      actions={item.links.demo ?
        [
          <a className="action-icon" href={item.links.github} target="_blank" rel="noopener noreferrer"><GitHub /></a>,
          <a className="action-icon" href={item.links.demo} target="_blank" rel="noopener noreferrer"><Monitor /></a>
        ] :
        [<a className="action-icon" href={item.links.github} target="_blank" rel="noopener noreferrer"><GitHub /></a>]                    
      }
    >
      <div className="ant-card-meta-title">{item.title}</div>
      <div className="tags">{item.tags.map((tag: any) => <Tag>{tag}</Tag>)}</div>
      <div className="ant-card-meta-description">{item.description}</div>
      {item.description2 ? 
        <div className="ant-card-meta-description description2">
          {item.description2.award ? <Award size={18} style={{ marginRight: "4px" }} /> : null}
          {item.description2.text}
        </div> : 
        null
      }
    </Card>
  )
};

export default CodingProjectCard;
