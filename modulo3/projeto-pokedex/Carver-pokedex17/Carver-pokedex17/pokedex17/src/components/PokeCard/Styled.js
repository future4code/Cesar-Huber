import styled from "styled-components";

export const Card = styled.article`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:#F5F5F5;
  border: 2px solid black;
  font-size: 1rem;
  border-radius: 0.5em;
  padding: 1em;
  transition: transform 200ms;
  cursor: pointer;

  p {
    font-family: 'Oswald', sans-serif;
    text-transform:capitalize;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 1.75em;
    margin: 0;
  }

  img {
    width: 90%;
  }
  `;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 0.8em;
  margin-top: 1em;
  align-items:center;
  width: 100%;

  button {
    width: 100%;
  }
`;
