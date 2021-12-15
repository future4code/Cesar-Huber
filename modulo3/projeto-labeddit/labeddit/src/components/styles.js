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
    z-index: 1;
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

export const LogoutButton = styled.button`
    cursor: pointer;
    margin: 1px 10px;
    padding: 4px 10px;
    border: 1px solid ${COLORS.eDarkish};
    background-color: ${COLORS.eWhiteish};
    color: ${COLORS.eDarkish};
    border-radius: 25px;
    font-size: 16px;
    &:hover{
        background-color: ${COLORS.eDarkish};
        color: ${COLORS.eWhiteish};
        font-weight: 400;
    }
`

export const PostMainContainer = styled.div`
    margin: 10px;
    min-width: 350px;
    width: 60%;
    border: 1px solid rgba(25, 23, 22, .3); 
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        border: 1px solid rgba(25, 23, 22, .9); 
        box-shadow: 3px 3px 5px ${COLORS.eWhiteish};
    }
`

export const PostHeaderContainer = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
`

export const PostUserContainer = styled.div`
    width: 25%;
    border-right: 1px solid rgba(25, 23, 22, .3);
    border-bottom: 1px solid rgba(25, 23, 22, .3);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4{
        margin: 5px;
        font-size: 14px;
    }
`

export const PostTitleContainer = styled.div`
    width: 75%;
    border-bottom: 1px solid rgba(25, 23, 22, .3);
    padding: 15px;
    display: flex;
    align-items: center;
`

export const PostBodyContainer = styled.div`
    width: calc(100% - 20px);
    border-bottom: 1px solid rgba(25, 23, 22, .3);
    padding: 10px;
    display: flex;
`

export const PostFooterContainer = styled.div`
    width: calc(100% - 20px);
    height: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
`

export const PostVoteContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    p{
        padding: 0 5px;
    }
`

export const PostCommentContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    p{
        padding: 0 5px;
    }
`

export const PostNewCommentContainer = styled.div`
    width: calc(100% - 10px);
    height: 40px;
    padding: 5px;
    display: flex;
    align-items: center;
    background: rgba(224, 226, 219, .3);
    border-radius: 0 0 10px 10px;
    form{
        width: 100%;
        display: flex;
    }
    input{
        width: calc(100% - 40px);
        border: 1px solid ${COLORS.eSecondary};
        border-radius: 5px;
    }
    button{
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