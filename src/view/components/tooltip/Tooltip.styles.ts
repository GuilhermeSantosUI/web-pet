import { Content as ContentTooltip, Provider } from "@radix-ui/react-tooltip";
import styled, { keyframes } from "styled-components";

export const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-4px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled(Provider)`
  button {
    all: unset;
  }
`;

export const Content = styled(ContentTooltip)`
  border-radius: 6px;
  padding: 8px;

  display: flex;

  font-size: 14px;

  color: white;
  background-color: #41beba;

  user-select: none;

  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  will-change: transform, opacity;

  &[data-state="delayed-open"][data-side="top"] {
    animation-name: ${slideDownAndFade};
  }
  &[data-state="delayed-open"][data-side="right"] {
    animation-name: ${slideRightAndFade};
  }
  &[data-state="delayed-open"][data-side="bottom"] {
    animation-name: ${slideUpAndFade};
  }
  &[data-state="delayed-open"][data-side="left"] {
    animation-name: ${slideRightAndFade};
  }
`;
