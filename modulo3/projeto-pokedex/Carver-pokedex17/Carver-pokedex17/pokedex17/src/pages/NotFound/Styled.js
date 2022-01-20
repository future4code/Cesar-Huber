import styled from "styled-components";

export const Header = styled.header`
  @media only screen and (max-width: 50em) {
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
    justify-items: center;
    padding: 1em;

    h1 {
      grid-row: 1 / span 1;
      grid-column: 1 / span 2;
      text-align: center;
      color: white;
    }
  }
`;

export const MainError = styled.main`
  display: flex;
  justify-content: center;

  img {
    padding-top: 2em;
    max-width: calc(100% - 4em);
  }
`;

export const TextoError = styled.h2`
  color: white;
`;

