import styled from 'styled-components'
import { COLORS } from '../../constants/styling'

export const SignupMainContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledTitle = styled.h2`
    margin: 15px;
    color: ${COLORS.eDarkish};
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputsContainer = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IndividualInputContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${COLORS.ePrimary};
`

export const StyledInputs = styled.input`
    width: 200px;
    height: 20px;
    border: 1px solid ${COLORS.eSecondary};
    border-radius: 15px;
    margin: 8px;
    padding: 4px 15px;
    font-size: 12px;
    box-shadow: 3px 3px 5px ${COLORS.eGreyish};
    transition: ease-in-out, height .15s ease-in-out;
    &:focus{
        font-size: 14px;
    }
`

export const SubmitButton = styled.button`
    width: 100px;
    text-align: center;
    cursor: pointer;
    margin: 5px 10px;
    padding: 5px 10px;
    border: 1px solid ${COLORS.eSecondary};
    background-color: ${COLORS.eWhite};
    color: ${COLORS.eDarkish};
    border-radius: 25px;
    &:hover{
        background-color: ${COLORS.eSecondary};
        color: ${COLORS.eWhiteish};
        font-weight: 400;
    }
`

export const GoBackButton = styled.button`
    width: 60px;
    text-align: center;
    cursor: pointer;
    margin: 5px 10px;
    padding: 5px 10px;
    border: 1px solid ${COLORS.eDarkish};
    background-color: ${COLORS.eWhite};
    color: ${COLORS.eDarkish};
    border-radius: 25px;
    &:hover{
        background-color: ${COLORS.eDarkish};
        color: ${COLORS.eWhiteish};
        font-weight: 400;
    }
`