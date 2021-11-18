import styled from 'styled-components'

/* db162f,dbdfac,037171,9FA2B2,273e47 */

// font-family: 'Barlow', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-weight: 200;

// ---------------------------------------- App ---------- //

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export const ContainerHeader = styled.div`
    width: 100%;
    background-color: #273E47;
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #dbdfac;
    img{
        width: 40px;
        height: 40px;
    }
    h2{
        font-size: 30px;
    }
`

export const ContainerLogo = styled.div`
    cursor: pointer;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const ContainerMenu = styled.div`
    flex-grow: 1;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        cursor: pointer;
    }
`

export const ContainerMain = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9FA2B2;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    display: flex;
`

// ---------------------------------------- CreatePL ---------- //

export const ContainerCreatePL = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9FA2B2;
    font-family: 'Barlow', sans-serif;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h2{
        margin: 7px;
        color: #273E47;
    }
    h3{
        margin: 7px;
        color: #273E47;
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        font-size: 18px;
    }
    input{
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        width: 300px;
        margin: 7px;
        line-height: 28px;
        font-size: 18px;
    }
    button{
        background-color: #dbdfac;
        color: #db162f;
        border: none;
        border-radius: 10px;
        padding: 2px 10px;
        margin: 7px;
        font-family: 'Barlow', sans-serif;
        font-size: 20px;
        cursor: pointer;
    }
`

// ---------------------------------------- PLList ---------- //

export const ContainerPLList = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9FA2B2;
    font-family: 'Barlow', sans-serif;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const EachPlaylist = styled.div`
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    border-bottom: 1px solid grey;
    line-height: 30px;
    button{
        cursor: pointer;
        border: none;
        color: #db162f;
        background-color: inherit;
        font-family: 'Barlow', sans-serif;
        font-size: 12px;
    }
    li{
        cursor: pointer;
        list-style-type: none;
        font-size: 22px;
    }
`

// ---------------------------------------- PLDetails ---------- //

export const PLDetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #273e47;
`

export const TrackContainer = styled.div`
    margin: 5px;
    display: grid;
    grid-template-rows: 24px 22px;
    grid-template-columns: 150px 150px;
    align-items: center;
    background-color: #dbdfac;
    box-shadow: 3px 3px 3px grey;
    h3{
        padding: 0 3px;
        grid-row: 1;
        grid-column: 1/-1;
        font-size: 18px;
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
        color: #037171;
    }
    p{
        padding: 0 3px;
        grid-row: 2;
        grid-column: 2;
        font-size: 15px;
        font-family: 'Barlow', sans-serif;
        font-weight: 200;
        color: #db162f;
    }
`

export const ContainerPlayPause = styled.div`
    display: flex;
    align-items: center;
    grid-row: 2;
    grid-column: 1;
    img{
        cursor: pointer;
        width: 18px;
        height: 18px;
        margin: 0 10px;
    }
`

export const PLDetailHeaderContainer = styled.div`
    margin: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    h2{
        margin: 0 10px;
    }
`

export const PLDetailAddContainer = styled.div`
    padding: 10px;
    display: grid;
    grid-template-rows: repeat(3, 20px);
    grid-template-columns: 220px 80px;
    input{
        grid-column: 1;
        border: 1px solid #9FA2B2;
        padding-left: 3px;
    }
    button{
        grid-column: 2;
        grid-row: 1/-1;
        border: none;
        background-color: #037171;
        color: #DBDFAC;
        border-radius: 0 20px 20px 0;
    }
`