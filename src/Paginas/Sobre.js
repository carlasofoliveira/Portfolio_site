import React from "react";
import styled from "styled-components";
import PText from "../Components/PText";
import SectionTitle from "../Components/SectionTitle";
import AboutImg from "../assets/imagens/eu.png";

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--orange);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 9rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function Sobre() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <SectionTitle heading="Sobre " subheading="some of my recent works" />
          <div className="top-section">
            <div className="left">
              
              <p className="about__subheading">
                Olá eu sou<span>Carla Oliveira</span>
              </p>
              <h5 className="about__heading"> Front End Web developer <br />Game developer</h5>
              
              <div className="about__info">
                <PText>
                  Amigável, responsável, persistente, dedicada, sempre com
                  vontade de fazer melhor e aprender mais. Gosto por trabalhar
                  em equipa e ajudar quem precisa.
                  <br /> <br />
                  Sou Licenciada em Novas Tecnologias da Comunicação pela Universidade de Aveiro, e durante
                  estes 3 anos fui descobrindo o que mais gosto, desenvolvimento
                  web e jogos digitais.
                  <br /> <br />
                  Nesta Licenciatura pude desenvolver vários projectos que me
                  permitiram conhecer mais sobre mim e sobre as minhas áreas de
                  interesse. Permitiu elevar ainda mais o meu interesse e gosto
                  pelas artes, o que me leva a querer aprender o desenvolvimento
                  2D e 3D.
                  <br />
                  <br />A minha visão para o futuro é a de conseguir produzir
                  projectos de web intuitivos, de facil utilização, mas com um
                  design atual e moderno. Na vertente de jogos digitais,
                  pretendo desenvolver um jogo em Unity. Também gostaria de
                  desenvolver um jogo web para poder aliar as duas componentes e
                  gostaria de focar-me inteiramente em jogos digitais.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
