import styled from "styled-components";
import Box from "@mui/material/Box";

export const Container = styled(Box)`
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    circle at 0%,
    #fff,
    #fbfff8 0%,
    #fbfff8 60%,
    #fff 0%
  );

  button:hover {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  position: absolute;
  width: 50%;
  padding: 5%;

  h2 {
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: #5c5c5c;
    font-size: 32px;
    margin-bottom: 5%;
  }
`;

export const Input = styled.input`
  width: 80%;
  margin: 2% 10% 0;
  height: 56px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding-left: 3%;
  font-family: "Roboto", sans-serif;
  color: #5c5c5c;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #5c5c5c;
  }
`;
export const Cadastrar = styled.button`
  width: 83%;
  margin: 2% 10% 0;
  background: #5c5c5c;
  height: 64px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #e6e6e6;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background: #e6e6e6;
    color: #5c5c5c;
    cursor: pointer;
  }
`;

export const Ilustracao = styled.img`
  position: absolute;
  right: 5%;
  width: 30%;
  top: 20%;
`;

