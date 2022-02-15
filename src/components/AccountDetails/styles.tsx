import styled from 'styled-components/native';

export const DetailContainer = styled.View`
  display: flex;
  width: 330px;
  height: 320px;
  background: #b41e1e;
  margin: 18px;
  border-radius: 12px;
  position: absolute;
  top: 340px;
  z-index: 5;
`;
export const Icon = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;
export const Content = styled.View`
  width: 100%;
  flex: 1;
  background: #0000006e;
  border-radius: 12px;
  margin-top: 20px;
`;
export const NextGame = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonContainer = styled.View`
  width: 140px;
  height: 60px;
  margin-left: 180px;
  padding-top: 8px;
`;
export const TextContent = styled.View`
  flex-direction: row;
  align-items: center;
`;
