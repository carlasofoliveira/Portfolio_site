import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const ProjectInfoStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    padding: 1rem;
    border-radius: 8px;
    color: var(--orange-2);
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
  
  }
`;

export default function ProjectInfo({
  items = ['HTML', 'CSS'],
}) {
  return (
    <ProjectInfoStyles>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </ProjectInfoStyles>
  );
}