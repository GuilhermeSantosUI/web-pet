import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  gap: 10px;

  position: relative;

  padding: 10px 4px;
`;

export const Icon = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 44px;
  bottom: 50px;

  background-color: #ffd161;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  object-fit: cover;
`;
