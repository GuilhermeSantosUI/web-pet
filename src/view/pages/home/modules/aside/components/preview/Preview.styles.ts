import styled from "styled-components";

export const Container = styled.div``;

export const ShadowOne = styled.div`
  width: 92%;
  height: 10px;
  background-color: #f1fcfb;
  border-radius: 4px 4px 0 0;
  margin: 0 auto;
`;

export const ShadowTwo = styled.div`
  width: 96%;
  height: 10px;
  background-color: #ddf2f1;
  border-radius: 4px 4px 0 0;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 16px 10px;
  background-color: #41beba;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
`;

export const BalancoRow = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BalancoTitle = styled.p`
  font-size: 14px;
`;

export const BalancoLink = styled.a`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: underline;
  gap: 4px;
`;

export const BalancoValue = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BalancoInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HorasRestantes = styled.p`
  font-size: 14px;
`;

export const VendasRealizadas = styled.p`
  font-size: 14px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
