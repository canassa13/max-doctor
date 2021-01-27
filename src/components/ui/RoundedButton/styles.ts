import styled from 'styled-components';
import Ripples from 'react-ripples';

import theme from '@styles/theme';
import { RoundedButtonProps } from '.';

type RoundedButtonStyleProps = Pick<
  RoundedButtonProps,
  'width' | 'height' | 'color'
>;

export const Button = styled.button`
  background: transparent;
  color: ${(props: RoundedButtonStyleProps) =>
    props?.color ? props.color : 'white'};
  border: 0;
  width: ${(props: RoundedButtonStyleProps) => props?.width};
  height: ${(props: RoundedButtonStyleProps) => props?.height};
  padding: ${theme.spacing}px;
  display: flex;
  align-items: center;
`;

export const RoundedRipples = styled(Ripples)`
  border-radius: 50%;
`;
