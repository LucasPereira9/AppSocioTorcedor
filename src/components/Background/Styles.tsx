import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 163px;
  z-index: -20;
`;
export const QRcodeView = styled.View`
  width: 110px;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;
export const ButtonContainer = styled.View`
  position: absolute;
  top: 285px;
  right: 6px;
  width: 310px;
  height: 40px;
  border-width: 1px;
  border-color: #ff0000ab;
  justify-content: center;
  border-radius: 4px;
`;
export const OptionsContainer = styled.View`
  height: 130px;
  width: 320px;
  margin-top: 30px;
  justify-content: space-around;
  border-top-width: 1px;
  border-color: #ffffff44;
`;

export const Option = styled.View`
  width: 320px;
  height: 40px;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-color: #ffffff44;
  align-items: center;
`;
