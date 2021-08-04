import React from "react";
import styled from "styled-components";
import PText from "../Components/PText";
import MarvelImg from "../assets/imagens/marvel_jogo.png";
import ProjectInfo from "./Projectos_info";

const MarvelStyles = styled.div`
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
  .marvel__subheading {
    font-size: 9rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
      color: orange;
    }
  }
  .marvel__heading {
    font-size: 8rem;
    margin-bottom: 3rem;
  }
  .marvel__info {
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
  .marvel__info__items {
    margin-top: 15rem;
  }

  .marvel__info__heading {
    font-size: 2rem;
    font-family: "Roboto Mono";
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .marvel__subheading {
      font-size: 1.8rem;
    }
    .marvel__heading {
      font-size: 2.8rem;
    }
    .marvel__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function AppCenter() {
  return (
    <>
      <MarvelStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="marvel__subheading">
                <span>Marvel</span>
              </p>
              <h2 className="marvel__heading"></h2>
              <div className="marvel__info">
                <PText>
                  <br /> <br />
                  Este projecto foi desenvolvido em grupo e no âmbito da disciplina de
                  Laboratório 5 - Perfil-A.
                  <br /> <br />
                  O tema do projecto era de escolha livre, e tinha como
                  objectivo a construção de um site cujo objetivo era a
                  implementação das linguagens aprendidas na disciplina.
                  <br /> <br />
                  O tema escolhido foi a Marvel, em que consistia num jogo de memória. 
                 As cartas do jogo continham imagens de personagens da Marvel, que foram "retiradas" do site da Marvel
                 através da utilização da Api.
                 <br /> <br />
                  Neste mesmo site, também foi utilizado a Api do youtube para que se consiga obter 
                  os trailers dos videos correspondentes às personagens da Marvel existentes no site.
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Para este projecto foi utilizado:</h3>
                  -Visual Studio Code
                  <br /> <br />
                  <h3>Linguagens de programação:</h3>
                  -React js
                  <br />
                  -Nodejs
                  <br /> <br />
                 <h3> Utilização de Api's:</h3>
                  -Api da Marvel
                  <br />
                  -Api do Youtube
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Github link:</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/carlasofoliveira/Project_labm5-A_Marvel.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Projecto Laboratório 5 Perfil-A - Marvel
                      </a>
                    </li>
                  </ul>
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={MarvelImg} alt="" />
            </div>
          </div>
        </div>
      </MarvelStyles>
    </>
  );
}
