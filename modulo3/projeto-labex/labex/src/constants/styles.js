import styled from 'styled-components'

export const COLORS = {
    xtealish:"#3c8f9a",
    xyellowish:"#f0a202",
    xgreyish:"#2b2c28",
    xredish:"#ee6055",
    xwhiteish:"#f6f7eb"
}

export const MainContainer = styled.div`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, ${COLORS.xwhiteish}, ${COLORS.xgreyish});
    h1{
        margin: 15px;
        font-size: calc(25px + 15 * ((100vw - 345px) / (1200 - 345)));
        color: ${COLORS.xwhiteish};
        text-shadow: 2px 2px 5px ${COLORS.xgreyish};
        font-weight: 100;
        text-align: center;
    }
    img{
        margin: 10px;
        height: 30vw;
        border-radius: 800px;
        box-shadow: 10px 10px 10px ${COLORS.xredish}
    }
    input{
        margin: 5px;
        padding: 3px 7px;
    }
    button{
        margin: 5px;
        padding: 3px 7px;
    }
`

export const ButtonsContainer = styled.div`
    margin: 10px;
    width: 60%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const StyledButtonTeal = styled.button`
border: none;
background-color: ${COLORS.xwhiteish};
color: ${COLORS.xgreyish};
margin: 10px;
padding: 7px 15px;
border-radius: 5px;
cursor: pointer;
font-size: calc(20px + 10 * ((100vw - 345px) / (1200 - 345)));
font-weight: 100;
transition: background-color 0.3s, color 0.3s;
&:hover{
    background-color: ${COLORS.xtealish};
    color: ${COLORS.xwhiteish}
}
`