import React from "react";
import styled from "styled-components";
import PText from "../Components/PText";
import AppCenterImg from "../assets/imagens/Mapa.png";

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
  .appcenter__subheading {
    font-size: 9rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
      color: orange;
    }
  }
  .appcenter__heading {
    font-size: 8rem;
    margin-bottom: 3rem;
  }
  .appcenter__info {
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
  .appcenter__info__items {
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
    .appcenter__subheading {
      font-size: 1.8rem;
    }
    .appcenter__heading {
      font-size: 2.8rem;
    }
    .github_link {
      a {
        font-size: 0.5rem;
      }
  }
`;

export default function AppCenter() {
  return (
    <>
      <AppCenterStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="appcenter__subheading">
                <span>AppCenter</span>
              </p>
              <h2 className="appcenter__heading"></h2>
              <div className="appcenter__info">
                <PText>
                  A aplicação CeNTER surge integrada no programa CeNTER - Redes
                  e Comunidades para a inovação Territorial.
                  <br /> <br />
                  Tem por objetivo fomentar as interações internas e externas entre agentes
                  relevantes no contexto da inovação territorial, nomeadamente,
                  cidadãos, iniciativas comunitárias, entidades públicas e
                  privadas, facilitando a comunicação e colaboração entre si,
                  promovendo cenários de inovação e de coesão territorial.
                  <br /> <br />
                  Este projecto foi desenvolvido em grupo e no âmbito do Projecto final de curso e consistiu na implementação de uma aplicação mobile, com o recurso ao React Native como linguagem de programação.
                  <br />  <br />
                  Foi estudado diferenças entre Ios e Android, pois procedeu-se à mudança do Sistema operativo inicialmente escolhido. 
                  Todo o design da aplicação e a prototipagem já tinham sido desenvolvidos.
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Para este projecto foram utilizados vários programas:</h3>
                  -Postman
                  <br />
                  -MobaxTerm
                  <br />
                  -DBeaver
                  <br />
                  -Visual Studio Code
                  <br /> <br />
                  <h3>Linguagens de programação:</h3>
                  -React Native
                  <br />
                  -Nodejs
                  <br /> <br />
                  <h3>Base de Dados:</h3>
                  -MySQL
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Github link:</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/carlasofoliveira/projeto_final_curso.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                      Projecto Final curso -  AppCenter
                      </a>
                    </li>
                  </ul>
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AppCenterImg} alt="" />
            </div>
          </div>
        </div>
      </AppCenterStyles>
    </>
  );
}
