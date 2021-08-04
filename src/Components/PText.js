import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.3rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 950px) {
    font-size: 2rem;
  }
`;

export default function PText( {children} ) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
