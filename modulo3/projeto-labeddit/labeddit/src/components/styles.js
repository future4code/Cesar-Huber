import styled from 'styled-components'
import { COLORS } from '../constants/styling'

export const HeaderMainContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.eWhiteish};
    color: ${COLORS.ePrimary};
    h2{
        margin: 10px;
    }
`

export const HeaderLogoContainer = styled.div`
    cursor: pointer;
    margin: 5px 10px;
    display: flex;
    align-items: center;
`

export const HeaderUserContainer = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
`

export const LoginButton = styled.button`
    cursor: pointer;
    margin: 1px 10px;
    padding: 4px 10px;
    border: 1px solid ${COLORS.ePrimary};
    background-color: ${COLORS.eWhite};
    color: ${COLORS.eDarkish};
    border-radius: 25px;
    font-size: 16px;
    &:hover{
        background-color: ${COLORS.ePrimary};
        color: ${COLORS.eWhiteish};
        font-weight: 400;
    }
`

export const RegisterButton = styled.button`
    cursor: pointer;
    margin: 1px 10px;
    padding: 4px 10px;
    border: 1px solid ${COLORS.eSecondary};
    background-color: ${COLORS.eWhite};
    color: ${COLORS.eDarkish};
    border-radius: 25px;
    font-size: 16px;
    &:hover{
        background-color: ${COLORS.eSecondary};
        color: ${COLORS.eWhiteish};
        font-weight: 400;
    }
`