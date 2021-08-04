import React from "react";
import styled from "styled-components";
import PText from "../Components/PText";
import sitejogoImg from "../assets/imagens/cenario_jogo1.png";
import ProjectInfo from "./Projectos_info";


const SiteJogorStyles = styled.div`
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
  .sitejogo__subheading {
    font-size: 9rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
      color: orange;
    }
  }
  .sitejogo__heading {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  .sitejogo__info {
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
  .sitejogo__info__items {
    margin-top: 15rem;
  }

  .sitejogo__info__heading {
    font-size: 2rem;
    font-family: "Roboto Mono";
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .sitejogo__subheading {
      font-size: 2.8rem;
    }
    .sitejogo__heading {
      font-size: 2.8rem;
    }
    .sitejogo__info__heading {
      font-size: 3rem;
    }
    .github_link {
      a {
        font-size: 0.5rem;
      }
    }
  }
`;

export default function SiteJogo() {
  return (
    <>
      <SiteJogorStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="sitejogo__subheading">
                <span>Site Jogo</span>
              </p>
              <h5 className="sitejogo__heading">(Em desenvolvimento)</h5>
              <div className="sitejogo__info">
                <PText>
                  <br /> <br />
                  Este projecto consiste num portfólio online que tem a estrutura de um jogo, mas muito mais simples.
                  <br /> <br />
                  Para mostrar os meus trabalhos, e informações pessoais, decidi desenvolver um site estruturado como um jogo de plataforma, 
                  sendo que em cada plataforma contem um único elemento a ser colectado. 
                  <br /> <br />
                  Quando esse elemento é colectado, aparece um pop up com informações tanto pessoais como de projectos desenvolvidos e competências adquiridas.
                  <br /> <br />
                 Para que o utilizador saiba que passou por todos os elementos, a cada recolha do elemento na plataforma, vai fazendo o score dentro do número total de elementos existentes no jogo.
                  O design do cenário, da personagem , dos elementos a serem colectados entre outros, serão desenhados por mim. 
                 <br /> <br />
                 Este site está a ser desenvolvido recorrendo à framework Phaser versão 3.
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Para este projecto foi utilizado:</h3>
                  -Visual Studio Code
                  <br /> <br />
                  <h3>Linguagens de programação:</h3>
                  -HTML
                  <br />
                  -Phaser3
                  <br />
                  -Javascript
                  <br />
                  -nodejs
                  <br /> <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Github link:</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/carlasofoliveira/site_jogo.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Projecto Individual - Site Portfólio (jogo)
                      </a>
                    </li>
                  </ul>
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={sitejogoImg} alt="" />
            </div>
          </div>
        </div>
      </SiteJogorStyles>
    </>
  );
}
