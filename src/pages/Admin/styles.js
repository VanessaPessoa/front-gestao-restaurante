import styled from "styled-components";

const Container = styled.div`
    width: calc(100% - 128px);
    height: calc(100% - 128px);
    padding: 64px;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;

    color: #44423E;
`;

const Box =  styled.div`
    display: flex;
    flex-direction: column;
`

export {
    Container,
    Title,
    Box
}