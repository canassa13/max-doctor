import styled from 'styled-components';
import Ripples from 'react-ripples';

import theme from '@styles/theme';
import { DefaultButtonProps } from '.';

export const Button = styled.button<DefaultButtonProps>`
  border: 0;
  width: 100%;
  height: 100%;
  color: ${props => (props?.color ? props?.color : 'white')};
  border-radius: ${theme.borderRadius}px;
  background: ${props =>
    props?.background ? props?.background : theme.colors.purple.medium};
`;

export const Container = styled(Ripples)<
  Pick<DefaultButtonProps, 'width' | 'height'>
>`
  width: ${props => (props?.width ? props?.width : '100%')};
  height: ${props => (props?.height ? props?.height : 'auto')};
`;
