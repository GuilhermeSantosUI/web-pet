import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const Content = styled(Link)`
  padding: 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 6px;

  background-color: transparent;
  color: #000000;

  transition: all 0.2s;

  &:hover {
    background-color: #f2f2f2;
  }

  &.active {
    background-color: #41beba;

    path {
      fill: #fff;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;
