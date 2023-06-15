import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 128px);
  height: calc(100% - 128px);
  padding: 64px;
  background: #E6E6E6;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #243509;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 20px 0;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const MyRestaurant = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Infos = styled.div`
    width: 33%;
    border-left: 3px solid #80B162;
    padding-left: 8px;

`;

export { Container, Title, Box, MyRestaurant, Infos };
