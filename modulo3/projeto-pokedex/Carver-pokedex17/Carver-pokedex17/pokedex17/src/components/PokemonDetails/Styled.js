import styled from "styled-components";

export const Images = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  height: fit-content;
  border-radius: 20px;
  border: 2px solid #3A445D;
  box-shadow: 3px 3px 5px #91A8A4;

  img {
    width: clamp(96px, calc(61.34px + 11.55vw), 200px);
    overflow: hidden;
  }

  @media only screen and (max-width: 33em) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const SectionText = styled.section`
  background-color: whitesmoke;
  color: #3A445D;
  padding: 1em;
  height: fit-content;
  border-radius: 20px;
  border: 2px solid #3A445D;
  box-shadow: 3px 3px 5px #91A8A4;
  text-align: center;
`;

export const SectionStats = styled(SectionText)`
  @media only screen and (max-width: 60em) {
    grid-row: 2 / span 1;
    grid-column: 2 / span 2;
    display: flex;
        justify-content: center;

    h2 {
      width: 100%;
    }
    
    article {
      flex-grow: 2;
      margin: 0.5em;
    }
  }

  @media only screen and (max-width: 33em) {
    grid-column: 1 / span 1;
  }
`;

export const SectionInfo = styled(SectionText)`
`;

export const ArticleTypes = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  p {
    margin: 0.5em;
  }
`;

export const ArticleMoves = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, 13ch);
  justify-items: center;
  justify-content: center;

  p {
    width: fit-content;
  }
`;

