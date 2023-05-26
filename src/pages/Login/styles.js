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
    width: 500px;
    height: 60vh;
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
    color: #39363D;
 `;

const Button = styled.button`
    width: 100%;
    background-color: #39363D;
    height: 56px;
    color: #ffffff;
    border-radius: 4px;
`

export {
    Container,
    Card,
    CardLink,
    Redirect,
    Button
}