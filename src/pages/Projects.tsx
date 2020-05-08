import React from 'react';
import { Tabs, List, Card } from 'antd';
import { Code, Briefcase, Monitor, Award } from 'react-feather';
import CodingProjectsData from '../data/CodingProjectsData.js';
import BusinessProjectsData from '../data/BusinessProjectsData.js';
import CodingProjectCard from '../components/CodingProjectCard';
import './Projects.css';

const { TabPane } = Tabs;

export interface CodingProject {
  cover: any[];
  title: string;
  tags: string[];
  description: string;
  description2?: {
    award?: boolean,
    text: string,
  },
  links: {
    github: string;
    demo?: string;
  }
}

interface BusinessProject {
  cover: any;
  title: string;
  description: string;
  description2?: {
    award?: boolean,
    text: string,
  },
  links: {
    demo: string;
  }
}

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Code /> Coding Projects</span>} key="1">
          <List
            grid={{
              gutter: 30,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={CodingProjectsData}
            renderItem={(item : CodingProject) => (
              <List.Item>
                <CodingProjectCard item={item} />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab={<span><Briefcase /> Business Projects</span>} key="2">
          <List
            grid={{
              gutter: 30,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={BusinessProjectsData}
            renderItem={(item : BusinessProject) => (
              <List.Item>
                <Card
                  cover={<img src={item.cover} />}
                  actions={[<a className="action-icon" href={item.links.demo} target="_blank" rel="noopener noreferrer"><Monitor /></a>]}
                >
                  <Card.Meta
                    title={item.title}
                    description={item.description}
                  />
                  {item.description2 ? 
                    <div className="ant-card-meta-description description2">
                      {item.description2.award ? <Award size={18} style={{ marginRight: "4px" }} /> : null}
                      {item.description2.text}
                    </div> : 
                    null
                  }
                </Card>
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Projects;
