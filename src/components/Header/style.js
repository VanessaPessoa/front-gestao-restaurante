import styled from 'styled-components'


export const Nav = styled.nav`
    position: relative;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #dcdcdc;
    border-top: 1px solid #dcdcdc;
    display: flex;
    align-items: center;
    justify-content: end;

    .logo{
        position: relative;
        width: 10%;
        height: 90%;
    }

    .logo img{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .box-button{
        position: relative;
        display: flex;
        margin-left: auto;
        margin-right: 5%;
    }
`

export const Button = styled.button`
    position: relative;
    height: 100%;
    background-color: transparent;
    border-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 3%;

    img{
        height: 25px;
        width: 25px;
        margin-right: 5px;
        margin-left: 5px;
    }

    span{
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;
        margin-left: .5%;
    }

    &:hover{
        cursor: pointer;
    }

`