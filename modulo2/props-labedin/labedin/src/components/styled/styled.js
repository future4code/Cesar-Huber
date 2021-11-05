import React from 'react';
import styled from 'styled-components';

// -------------- App -------------------------------- //

export const MainContainer = styled.div`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

export const PageSectionContainer = styled.div`
    max-width: 40vw;
    min-width: 500px;
    margin: 10px 0;
    h3{
        text-align: center;
        margin-bottom: 20px;
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
    }
`;
  
export const TitleH2General  = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
`;

// -------------- ImagemButton ------------------------ //

export const ImageButtonContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 10px 30px;
    margin: 10px auto;
    img{
        width: 30px;
        margin-right: 10px;
    };
    p{
        font-weight: 500;
    };
`;

// -------------- ImagemButtonLink -------------------- //

export const ImageButtonContainerLink = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 10px 30px;
    margin: 10px auto;
    img{
        width: 30px;
        margin-right: 10px;
    };
    p{
        font-weight: 500;
    };
`;

// -------------- CardGrande -------------------------- //

export const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 3px;
    padding: 10px 10px;
    margin-bottom: 7px;
    img{
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
    };
    h4{
        margin: 5px;
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
        font-size: 20px;
    };
    div{
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    };
`;

// -------------- CardPequeno ------------------------- //

export const SmallCardContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    border-radius: 3px;
    margin: 7px 0;
    img{
        width: 25px;
        margin: 2px 10px;
    };
    p{
        margin: 2px 3px;
    };
`;

export const EmphasizedP = styled.p`
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
`