import React from "react";
import styled from "styled-components";
import PText from "../Components/PText";
import playdateImg from "../assets/imagens/playdate.jpg";

const PlaydateStyles = styled.div`
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
  .playdate__subheading {
    font-size: 9rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
      color: orange;
    }
  }
  .playdate__heading {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  .playdate__info {
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
  .playdate__info__items {
    margin-top: 15rem;
  }

  .playdate__info__heading {
    font-size: 2rem;
    font-family: "Roboto Mono";
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .playdate__subheading {
      font-size: 2.8rem;
    }
    .playdate__heading {
      font-size: 2.8rem;
    }
    .playdatemarvel__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function Playdate() {
  return (
    <>
      <PlaydateStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="playdate__subheading">
                <span>Dev Preview Playdate </span>
              </p>
              <h5 className="playdate__heading">(Em desenvolvimento)</h5>

              <div className="playdate__info">
                <PText>
                  <br /> <br />
                  Este projecto irá fazer parte de um conjunto de jogos em que
                  fui selecionada através de um concurso criado pela empresa de
                  software Panic.Inc,
                  <br /> <br />
                  A Playdate Dev Preview consiste numa pequena consola amarela,
                  com os botões A e B respetivamente e as teclas de direção, no
                  entanto acrescenta algo mais, uma manivela no qual poderá ser
                  utilizada para qualquer ação dentro do jogo.
                  <br /> <br />
                  O jogo permite só ter 1 bit, preto ou branco. O design de todo
                  o jogo será desenvolvido por mim.
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Para este projecto foi utilizado:</h3>
                  -Visual Studio Code
                  <br />
                  - Piskel
                  <br /> <br />
                  <h3>Linguagens de programação:</h3>
                  -Lua
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>Github link:</h3>
                  <ul>
                    <li>
                      <a href="" target="_blank" rel="noreferrer"></a>
                    </li>
                  </ul>
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={playdateImg} alt="" />
            </div>
          </div>
        </div>
      </PlaydateStyles>
    </>
  );
}
