import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled(NavLink)`
  display: flex;
  padding: 10px;

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
