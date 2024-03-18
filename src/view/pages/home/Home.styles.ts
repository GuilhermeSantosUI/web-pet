import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  height: 100%;

  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(8, 1fr);
`;

export const ChartContent = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #f2f2f2;

  display: flex;
  justify-content: center;
  flex-flow: column;
  gap: 10px;

  & > div {
    display: flex;
    flex-flow: column;
    gap: 4px;

    padding: 20px;
    padding-left: 0px;

    position: relative;

    p {
      font-weight: 400;
      color: #8c8c8c;
    }

    svg {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }

  border-radius: 8px;
`;
