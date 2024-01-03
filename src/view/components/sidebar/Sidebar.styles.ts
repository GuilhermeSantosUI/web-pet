import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  border-right: 1px solid #f2f2f2;

  display: flex;
  flex-flow: column;

  &:first-child {
    border-top: 0px;
  }
`;

export const Content = styled.div`
  padding: 16px;

  display: flex;
  flex-flow: column;
  gap: 10px;

  border-top: 1px solid #f2f2f2;
`;
