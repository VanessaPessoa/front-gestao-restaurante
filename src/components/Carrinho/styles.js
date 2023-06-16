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

export const Li = styled.li`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
`;
