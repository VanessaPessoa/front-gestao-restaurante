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
  width: 50%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 10px;
  justify-content:space-around;
  
`;

const MyRestaurant = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-bottom: 16px;
    
.info1 { grid-area: 1 / 1 / 2 / 2; }
.info2 { grid-area: 1 / 2 / 2 / 3; }
.info3 { grid-area: 1 / 3 / 2 / 4; }
    .info4 {
       grid-area: 2 / 1 / 3 / 2;;
       border-left: 3px solid #80B162;
       padding-left: 8px;  
    }
    .info5 { 
      grid-area:2 / 2 / 3 / 3;
      border-left: 3px solid #80B162;
      padding-left: 8px;  
   }
    
   .info6 { 
    grid-area: 2 / 3 / 3 / 4;
    border-left: 3px solid #80B162;
    padding-left: 8px;  
 }
    
`;

const Infos = styled.div`
    width: 50%;
    border-left: 3px solid #80B162;
    padding-left: 8px;

`;

export { Container, Title, Box, MyRestaurant, Infos };
