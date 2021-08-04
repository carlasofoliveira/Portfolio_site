import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectImg from "../assets/imagens/projectImg.png";

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 5px solid var(--orange-5);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--orange);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.9rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "",
  caminho ="",
}) {
  return (
    <ProjectItemStyles>
      <Link to= {caminho} className="projectItem__img" >
        <img src={img} alt="project img" />
      </Link>
      <div className="projectImg__info">
        <Link to={caminho}>
          <h3 className="projectItem__title">{title} </h3>
        </Link>
        <p className="projectitem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
