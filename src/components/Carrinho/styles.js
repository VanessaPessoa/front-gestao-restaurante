import styled from "styled-components";

export const BoxModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 500px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
`;

export const Form = styled.form`
  position: relative;
  padding: 32px;
  margin-top: 16px;
`;

export const ButtonCadastro = styled.button`
  width: 100%;
  background-color: #5c5c5c;
  height: 56px;
  color: #ffffff;
  border-radius: 4px;
  margin-top: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonLimpar = styled.button`
  width: 100%;
  height: 56px;
  color: #5c5c5c;
  border-radius: 4px;
  margin-top: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const Li = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 8px;
  
.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 2 / 2 / 3 / 3; }
`;

export const Total = styled.p`
  font-family: "Roboto", sans-serif;
  color: #414143;
  font-size: 16px;
  margin-bottom: 5%;
`;
