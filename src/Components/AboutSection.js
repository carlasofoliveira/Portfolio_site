/*import React from "react";
import SectionTitle from "../Components/SectionTitle";
import Button from "./Button";
import PText from "../Components/PText";
import AboutImg from "../assets/imagens/about-sec-img.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
        gap: 0;
        .button---webkit-transition-property,
        a{
            width: 100%;
            text-align: center;
        }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle heading="Sobre" />
          <PText>
            Sou web development e tenho vindo a ganhar cada vez mais o interesse
            na área dos jogos digitais.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/sobre" btnText="sabe mais"></Button>
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}*/
