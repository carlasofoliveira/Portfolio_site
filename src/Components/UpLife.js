import React from "react";
import styled from "styled-components";
import PText from "../Components/PText";
import AboutImg from "../assets/imagens/up_life.png";
import ProjectInfo from "./Projectos_info";

const AppCenterStyles = styled.div`
  padding: 20rem 0 10rem 0;
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
    font-size: 9rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
      color: orange;
    }
  }
  .about__heading {
    font-size: 8rem;
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
      border: 2px solid var(--orange-2);
      height: 700px;
      width: 300px;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }

  .about__info__heading {
    font-size: 2rem;
    font-family: "Roboto Mono";
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 5rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .github_link {
      a {
        font-size: 0.5rem;
      }
    }
  }
`;

export default function UpLifeife() {
  return (
    <>
      <AppCenterStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                <span>UpLife</span>
              </p>
              <h2 className="about__heading"></h2>
              <div className="about__info">
                <PText>
                  <br /> <br />
                  Este projecto foi desenvolvido em grupo e no âmbito da
                  disciplina de Laboratório 4 - Perfil-A.
                  <br /> <br />
                  UpLife é uma aplicação web para pedir ajuda e ajudar pessoas.
                  O objectivo deste projecto era a de conseguir quebrar barreiras e unir a
                  comunidade.
                  <br /> <br />
                  Com a UpLife pode -se fazer o Registo de um pedido de ajuda numa
                  determinada categoria.
                  Pode -se oferecer ajuda satisfazendo pedidos de
                  outras pessoas.
                  <br /> <br />
                  
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Para este projecto foi utilizado:</h3>
                  -PhpStorm
                  <br /> <br />
                  <h3>Linguagens de programação:</h3>
                  -HTML
                  <br />
                  -Css
                  <br />
                  -PHP
                  <br /> <br />
                  <h3> Base de dados:</h3>
                  -MySQL
                  <br />
                  -PhpMyAdmin
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Github link:</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/carlasofoliveira/uplife.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Projecto Laboratório 4 Perfil-A - UpLife
                      </a>
                    </li>
                  </ul>
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="" />
            </div>
          </div>
        </div>
      </AppCenterStyles>
    </>
  );
}
