import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  position: absolute;
  top: 21px;
  z-index: -20;
`;
export const QRcodeView = styled.View`
  width: 130px;
  padding: 10px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 90px;
  background: #fff;
`;

export const OptionsContainer = styled.View`
  height: 130px;
  width: 320px;
  margin-top: 30px;
  justify-content: space-around;
  border-top-width: 1px;
  border-color: #ff00005e;
`;
