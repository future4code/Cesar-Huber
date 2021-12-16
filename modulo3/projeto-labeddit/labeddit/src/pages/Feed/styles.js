import styled from 'styled-components'
import { COLORS } from '../../constants/styling'

export const FeedMainContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NotLoggedContainer = styled.div`
    width: 100%;
    min-width: 350px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color: ${COLORS.ePrimary};
    }
    h4{
        color: ${COLORS.eDarkish};
        font-weight: 300;
    }
`

export const EmphasizedText1 = styled.span`
    font-style: italic;
    font-weight: 700;
    color: ${COLORS.ePrimary};
`

export const EmphasizedText2 = styled.span`
    font-style: italic;
    font-weight: 700;
    color: ${COLORS.eSecondary};
`

export const FeedSearchBarContainer = styled.div`
    margin: 5px;
    margin-bottom: 5px;
    padding-bottom: 0;
    min-width: 350px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin: 2px 0;
        padding: 0 10px;
        width: calc(100% - 2px);
        height: 25%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 14px;
        height: 22px;
        border: 1px solid ${COLORS.eWhiteish};
        border-radius: 15px;
        &:focus{
            box-shadow: 3px 3px 5px ${COLORS.eWhiteish};
        }
    }
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
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        margin: 3px;
        padding: 0;
    }
    input{
        margin: 2px 0;
        padding: 2px 10px;
        width: calc(100% - 2px);
        height: 25%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        border: 1px solid ${COLORS.eSecondary};
        border-radius: 5px;
    }
    textarea{
        margin: 2px 0;
        padding: 4px 10px;
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
    height: calc(100vh - 325px);
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`