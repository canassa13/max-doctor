import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${theme.colors.purple.light};
  padding-top: ${theme.spacing * 3}px;
  font-size: ${theme.fontSize.big}px;
  align-items: center;

  > div {
    width: 100%;
  }

  > label {
    width: 48px;
    color: ${theme.colors.gray.medium};
    font-size: ${theme.fontSize.medium}px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
