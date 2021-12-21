import styled from 'styled-components'
import { COLORS } from '../../constants/styling'

export const FeedMainContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${COLORS.eGrey};
`

export const NotLoggedContainer = styled.div`
    width: 100%;
    min-width: 350px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    h3{
        color: ${COLORS.eRed};
    }
    h4{
        color: ${COLORS.eDarkGrey};
        font-weight: 300;
    }
`

export const EmphasizedText1 = styled.span`
    font-style: italic;
    font-weight: 700;
    color: ${COLORS.eRed};
`

export const EmphasizedText2 = styled.span`
    font-style: italic;
    font-weight: 700;
    color: ${COLORS.eBlue};
`

export const FeedPageControlContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StyledNewPostForm = styled.form`
    margin: 5px;
    padding: 0;
    min-width: 350px;
    width: 60%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        margin: 10px;
        padding: 0;
    }
    input{
        margin: 2px 0;
        padding: 2px 10px;
        width: calc(100% - 12px);
        height: 25%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        border: 1px solid ${COLORS.eBlue};
        border-radius: 5px;
    }
    textarea{
        margin: 2px 0;
        padding: 4px 10px;
        width: calc(100% - 12px);
        height: 75%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        border: 1px solid ${COLORS.eBlue};
        border-radius: 5px;
    }
`

export const NewPostFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledCharCount = styled.p`
    margin: 5px 10px;
    padding: 5px 10px;
    align-self: flex-start;
    color: ${COLORS.eGrey};
    font-size: 12px;
`

export const StyledCharCountOver = styled.p`
    margin: 5px 10px;
    padding: 5px 10px;
    align-self: flex-start;
    color: ${COLORS.eRed};
    font-size: 12px;
    font-weight: 700;
`

export const StyledPostButton = styled.button`
    align-self: flex-end;
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

export const FeedPostsContainer = styled.div`
    width: 100%;
    height: calc(100vh - 306px);
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`