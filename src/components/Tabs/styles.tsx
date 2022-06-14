import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  justify-content: space-between;
  flex-direction: row;
  z-index: -1;
  margin-top: 1%;
`;

export const TabsContainer = styled(Animated.View)`
  width: 120px;
  height: 107px;
  background: #b41e1e;
  margin-left: 10px;
  margin-right: 10px;
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
