import styled from "styled-components";

export const BoxModal = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
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

  &:hover {
    cursor: pointer;
  }
`;
