import { DefaultButton } from '@components/ui';
import theme from '@styles/theme';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0 ${theme.spacing * 4}px;
    color: ${theme.colors.purple.medium};
    font-size: ${theme.fontSize.medium}px;
    text-align: center;
    font-weight: 500;
  }

  span {
    font-size: ${theme.fontSize.small}px;
    color: red;
    margin-bottom: -22px;
    padding-top: ${theme.spacing}px;
  }
`;

export const Button = styled(DefaultButton)`
  margin: ${theme.spacing * 5}px 0;
`;
