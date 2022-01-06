import styled from 'styled-components'
import { COLORS } from '../../constants/styling'

export const PostDetailMainContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostDetailHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostDetailNewCommentContainer = styled.div`
    width: 60%;
    height: 40px;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 0 0 10px 10px;
    form{
        width: 100%;
        display: flex;
    }
    input{
        width: calc(100% - 40px);
        border: 1px solid ${COLORS.eBlue};
        border-radius: 5px;
        padding: 0 10px;
    }
    button{
        cursor: pointer;
        width: 60px;
        text-align: center;
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
    }
`

export const PostDetailBodyContainer = styled.div`
    width: 100%;
    height: calc(100vh - 370px);
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostMainContainer = styled.div`
    margin: 10px;
    min-width: 350px;
    width: 60%;
    border: 1px solid rgba(25, 23, 22, .9); 
    box-shadow: 3px 3px 5px ${COLORS.eDarkGrey};
    border-radius: 10px;
    display: flex;
`

export const PostSecondaryContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

export const PostVoteContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(224, 226, 219, .3);
    padding: 10px 0;
    p{
        padding: 0;
        margin: 4px 0;
    }
`

export const PostHeaderContainer = styled.div`
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
    height: 90px;
    overflow: auto;
    padding: 10px;
    display: flex;
`