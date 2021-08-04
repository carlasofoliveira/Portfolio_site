import React, {  useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../Components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projectos() {
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projectos"
            subheading="some of my recent works"
          />
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                caminho={item.caminho}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
