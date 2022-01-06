import styled from 'styled-components'
import { COLORS } from '../../constants/styling'

export const LoginMainContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledTitle = styled.h2`
    margin: 15px;
    color: ${COLORS.eDarkGrey};
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputsContainer = styled.div`
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IndividualInputContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${COLORS.eBlue};
`

export const StyledInputs = styled.input`
    width: 200px;
    height: 20px;
    border: 1px solid ${COLORS.eRed};
    border-radius: 15px;
    margin: 8px;
    padding: 4px 15px;
    font-size: 12px;
    box-shadow: 3px 3px 5px ${COLORS.eDarkGrey};
    transition: ease-in-out, height .15s ease-in-out;
    &:focus{
        font-size: 14px;
    }
`

export const SubmitButton = styled.button`
    width: 60px;
    text-align: center;
    cursor: pointer;
    margin: 5px 10px;
    padding: 5px 10px;
    border: 1px solid ${COLORS.eRed};
    background-color: ${COLORS.white};
    color: ${COLORS.eDarkGrey};
    border-radius: 25px;
    &:hover{
        background-color: ${COLORS.eRed};
        color: ${COLORS.eLightGrey};
        font-weight: 400;
    }
`

export const GoBackButton = styled.button`
    width: 60px;
    text-align: center;
    cursor: pointer;
    margin: 5px 10px;
    padding: 5px 10px;
    border: 1px solid ${COLORS.eDarkGrey};
    background-color: ${COLORS.white};
    color: ${COLORS.eDarkGrey};
    border-radius: 25px;
    &:hover{
        background-color: ${COLORS.eDarkGrey};
        color: ${COLORS.eLightGrey};
        font-weight: 400;
    }
`

export const StyledSignUpContainer = styled.div`
    margin: 15px;
    font-size: 12px;
    span{
        cursor: pointer;
        font-style: italic;
        font-weight: 700;
        color: ${COLORS.eBlue};
    }
`