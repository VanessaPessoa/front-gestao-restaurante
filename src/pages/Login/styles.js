import styled from "styled-components";
import image from "../../image/login.jpg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${image});  
    background-repeat: repeat;
    position: relative;
    width: 100%;
    height: 100vh;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 40px;
    width: 400px;
    border-radius: 20px;
    background: #f9f9f9;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`;

const CardLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 15px;

    width: 400px;
    height: 35px;
`;

const Redirect = styled.a`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #96CF74;
 `;

const Button = styled.button`
    width: 100%;
    background-color: #5c5c5c;
    height: 56px;
    color: #ffffff;
    border-radius: 4px;

    &:hover{
        cursor: pointer;
    }
`
const ButtonCadastro = styled.button`
    width: 80%;
    margin: 2% 10% 0;
    background: transparent;
    height: 56px;
    border: transparent;
    border-radius: 4px;
    font-size: 14px;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    color: #414143;


    &:hover{
        cursor: pointer;
    }
`

const Form = styled.form`
    width: 90%;
    padding: 5%;

    h2{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        color: #414143;
        font-size: 32px;
        margin-bottom: 5%;
    }

`

export {
    Container,
    Card,
    CardLink,
    Redirect,
    Button,
    Form,
    ButtonCadastro
}