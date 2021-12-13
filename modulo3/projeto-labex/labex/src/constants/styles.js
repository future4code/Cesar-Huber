import styled from 'styled-components'

export const COLORS = {
    xtealish: "#3c8f9a",
    xyellowish: "#f0a202",
    xgreyish: "#2b2c28",
    xredish: "#ee6055",
    xwhiteish: "#f6f7eb",
    xtealishlight: "#4FAEBA",
    xredishlight: "#F2857D"
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
    >img{
        margin: 10px;
        height: 30vw;
        border-radius: 800px;
        box-shadow: 10px 10px 10px ${COLORS.xredish}
    }
    input{
        margin: 5px;
        padding: 3px 7px;
    }
    >button{
        cursor: pointer;
        margin: 5px;
        padding: 5px 10px;
        font-size: 14px;
    }
`

export const ButtonsContainer = styled.div`
    margin: 10px auto;
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
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

export const StyledApproveButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${COLORS.xtealishlight};
    color: ${COLORS.xwhiteish};
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 5px;
    &:hover{
        background-color: ${COLORS.xtealish};
    }
`

export const StyledRejectButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${COLORS.xredishlight};
    color: ${COLORS.xwhiteish};
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 5px;
    &:hover{
        background-color: ${COLORS.xredish};
    }
`

export const StyledGoBackButton = styled.button`
    cursor: pointer;
    border: none;
    padding: 6px 12px;
    margin: 5px 10px;
    border-radius: 5px;
    font-size: 16px;
    background-color: ${COLORS.xwhiteish};
    color: ${COLORS.xgreyish};
    &:hover{
        background-color: ${COLORS.xgreyish};
        box-shadow: 2px 2px 4px ${COLORS.xgreyish};
        color: ${COLORS.xwhiteish};
    }
`

export const StyledAdminButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${COLORS.xtealishlight};
    color: ${COLORS.xwhiteish};
    border-radius: 5px;
    font-size: 16px;
    padding: 6px 12px;
    margin: 5px 10px;
    &:hover{
        background-color: ${COLORS.xtealish};
        box-shadow: 2px 2px 4px ${COLORS.xgreyish};
    }
`

export const StyledLogoutButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${COLORS.xgreyish};
    color: ${COLORS.xwhiteish};
    padding: 6px 12px;
    margin: 5px 10px;
    border-radius: 5px;
    font-size: 16px;
    &:hover{
        background-color: ${COLORS.xwhiteish};
        color: ${COLORS.xgreyish};
        box-shadow: 2px 2px 4px ${COLORS.xgreyish};
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    min-width: 250px;
    max-width: 350px;
    input{
        width: calc(100% - 16px);
        margin: 10px 0;
        padding: 4px 8px;
        border: 1px solid black;
        border-radius: 5px;
    }
    select{
        width: 100%;
        margin: 10px 0;
        padding: 4px 8px;
        border: 1px solid black;
        border-radius: 5px;
    }
    button{
        max-width: 150px;
        cursor: pointer;
        border: none;
        background-color: ${COLORS.xtealishlight};
        color: ${COLORS.xwhiteish};
        border-radius: 5px;
        font-size: 16px;
        padding: 6px 12px;
        margin: 5px 10px;
        &:hover{
            background-color: ${COLORS.xtealish};
            color: '#FFF';
            box-shadow: 2px 2px 4px ${COLORS.xgreyish};
        }
    }
`

export const ApplicationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
    select{
        width: 40%;
        min-width: 250px;
        max-width: 350px;
        margin: 10px 0;
        padding: 4px 8px;
        border: 1px solid black;
        border-radius: 5px;
    }
`

export const TripCardContainer = styled.div`
    margin: 10px;
    padding: 3px 10px;
    border: 1px solid ${COLORS.xgreyish};
    border-radius: 5px;
    width: 30%;
    min-width: 240px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(246, 247, 235, .6);
    &:hover{
        background: rgba(246, 247, 235, 1);
    }
    div{
        min-height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    img{
        width: 30px;
        height: 30px;
        cursor: pointer;
        border-radius: 50px;
        &:hover{
            box-shadow: 3px 3px 7px ${COLORS.xredish}
        }
    }
`

export const TripCardContainerName = styled.div`
    flex: 1;
    min-height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
`