import styled from "styled-components";

export const DetailsMain = styled.main`
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto minmax(min-content, auto) 1fr;
  grid-gap: 2em;
  max-width: 90em;
  margin: 0 auto;
  padding: 2em;

  @media only screen and (max-width: 60em) {
    grid-template-columns: auto 1fr;
  }

  @media only screen and (max-width: 33em) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.header`
  @media only screen and (max-width: 35em) {
    height: fit-content;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 0.5em;
    justify-items: center;
    padding: 1em;

    h1 {
      grid-row: 1 / span 1;
      grid-column: 1 / span 2;
      text-align: center;
    }
  }
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  button{
    margin: 10px;
  }
`
