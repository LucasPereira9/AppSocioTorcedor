import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  z-index: -2;
`;

export const TabsContainer = styled.View`
  width: 120px;
  height: 127px;
  background: #b41e1eeb;
  margin-bottom: 24px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 38px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View`
  width: 40px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
export const Notification = styled.View`
  height: 25px;
  width: 20px;
  background: #faea07;
  border-radius: 1000px;
  position: absolute;
  top: 0;
  right: 0;
`;
