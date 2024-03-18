import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div``;

export const pop = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.86);
  }
  100% {
    transform: scale(1);
  }
`;

export const Content = styled(NavLink)`
  display: flex;
  padding: 10px;

  border-radius: 6px;

  background-color: transparent;
  color: #000000;

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
    animation: ${pop} 0.44s;
  }
`;
