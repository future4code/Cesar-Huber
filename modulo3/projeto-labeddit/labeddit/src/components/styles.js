import styled from 'styled-components'
import { COLORS } from '../constants/styling'

export const HeaderMainContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.eLightGrey};
    color: ${COLORS.eRed};
    z-index: 1;
`

export const HeaderLogoContainer = styled.div`
    cursor: pointer;
    margin: 5px calc(2px + 8 * ((100vw - 350px) / 850));
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    h2{
        margin: 0 calc(2px + 8 * ((100vw - 350px) / 850));
        font-size: calc(18px + 6 * ((100vw - 350px) / 850));
    }
`

export const HeaderSearchBarContainer = styled.div`
    flex-grow: 3;
    margin: 5px;
    margin-bottom: 5px;
    padding-bottom: 0;
    min-width: 160px;
    width: 40%;
    max-width: 60%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        align-self: center;
        margin: 2px 0;
        padding: 0 10px;
        width: calc(100% - 2px);
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 14px;
        height: 40px;
        border: 1px solid ${COLORS.eLightGrey};
        border-radius: 10px;
        &:focus{
            box-shadow: 3px 3px 5px ${COLORS.eDarkGrey};
        }
    }
`

export const HeaderUserContainer = styled.div`
    height: 30px;
    justify-self: flex-end;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
`

export const LoginButton = styled.button`
    cursor: pointer;
    height: 25px;
    margin: 1px 10px;
    padding: calc(1px + 3 * ((100vw - 350px) / 850)) 10px;
    border: 1px solid ${COLORS.eRed};
    background-color: ${COLORS.white};
    color: ${COLORS.eDarkGrey};
    border-radius: 25px;
    font-size: calc(10px + 4 * ((100vw - 350px) / 850));
    &:hover{
        background-color: ${COLORS.eRed};
        color: ${COLORS.eLightGrey};
        font-weight: 400;
    }
`

export const RegisterButton = styled.button`
    cursor: pointer;
    height: 25px;
    margin: 1px 10px;
    padding: calc(1px + 3 * ((100vw - 350px) / 850)) 10px;
    border: 1px solid ${COLORS.eBlue};
    background-color: ${COLORS.white};
    color: ${COLORS.eDarkGrey};
    border-radius: 25px;
    font-size: calc(10px + 4 * ((100vw - 350px) / 850));
    &:hover{
        background-color: ${COLORS.eBlue};
        color: ${COLORS.eLightGrey};
        font-weight: 400;
    }
`

export const LogoutButton = styled.button`
    cursor: pointer;
    height: 25px;
    margin: 1px 10px;
    padding: calc(1px + 3 * ((100vw - 350px) / 850)) 10px;
    border: 1px solid ${COLORS.eDarkGrey};
    background-color: ${COLORS.eLightGrey};
    color: ${COLORS.eDarkGrey};
    border-radius: 25px;
    font-size: calc(10px + 4 * ((100vw - 350px) / 850));
    &:hover{
        background-color: ${COLORS.eDarkGrey};
        color: ${COLORS.eLightGrey};
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
    background-color: white;
    &:hover{
        border: 1px solid rgba(25, 23, 22, .9); 
        box-shadow: 3px 3px 5px ${COLORS.eDarkGrey};
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

export const PostCommentClickContainer = styled.div`
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        color: ${COLORS.eRed};
        background-color: ${COLORS.eLightGrey};
    }
`

export const CommentMainContainer = styled.div`
    min-width: 350px;
    width: 70%;
    margin: 15px;
    padding: 5px 10px;
    border: 1px solid rgba(25, 23, 22, .9); 
    box-shadow: 3px 3px 5px ${COLORS.eDarkGrey};
    border-radius: 10px;
    display: flex;
    align-items: center;
`

export const CommentUserContainer = styled.div`
    width: 20%;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

export const CommentBodyContainer = styled.div`
    width: 60%;
    padding: 5px;
    display: flex;
    align-items: center;
`

export const CommentVoteContainer = styled.div`
    width: 20%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`