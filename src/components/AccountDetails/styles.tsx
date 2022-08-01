import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  z-index: 10;
`;

export const DetailContainer = styled.View`
  display: flex;
  min-width: 90%;
  min-height: 58%;
  background: #b41e1e;
  margin: 18px;
  border-radius: 12px;
  position: relative;
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

export const TextContent = styled.View`
  flex-direction: row;
  align-items: center;
`;
