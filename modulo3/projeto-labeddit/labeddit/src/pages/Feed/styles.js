import styled from 'styled-components'
import { COLORS } from '../../constants/styling'

export const FeedMainContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FeedPageControlContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StyledNewPostForm = styled.form`
    margin: 10px;
    padding: 10px;
    min-width: 350px;
    width: 60%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin: 2px 0;
        width: calc(100% - 2px);
        height: 25%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        border: 1px solid ${COLORS.eSecondary};
        border-radius: 5px;
    }
    textarea{
        margin: 2px 0;
        width: 100%;
        height: 75%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        border: 1px solid ${COLORS.eSecondary};
        border-radius: 5px;
    }
`

export const StyledPostButton = styled.button`
    align-self: flex-end;
    width: 60px;
    text-align: center;
    cursor: pointer;
    margin: 5px 10px;
    padding: 5px 10px;
    border: 1px solid ${COLORS.ePrimary};
    background-color: ${COLORS.eWhite};
    color: ${COLORS.eDarkish};
    border-radius: 25px;
    &:hover{
        background-color: ${COLORS.ePrimary};
        color: ${COLORS.eWhiteish};
        font-weight: 400;
    }
`

export const FeedPostsContainer = styled.div`
    width: 100%;
    height: calc(100vh - 300px);
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`