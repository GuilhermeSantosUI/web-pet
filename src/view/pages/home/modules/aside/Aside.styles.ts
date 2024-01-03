import styled from "styled-components";

export const Container = styled.aside`
  width: 600px;
  height: 100vh;

  border-left: 1px solid #f2f2f2;

  display: flex;
  flex-flow: column;

  padding: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
`;

export const InfoContent = styled.div`
  margin-top: 24px;
  height: 100%;
  flex-flow: 1;
`;

export const InfoList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

export const InfoColumn = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding-bottom: 10px;
`;

export const InfoTitle = styled.p`
  font-size: 14px;
`;

export const InfoValue = styled.h1`
  font-size: 50px;
`;
