import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${theme.colors.purple.light};
  padding: ${theme.spacing}px 0;
  font-size: ${theme.fontSize.big}px;
  align-items: center;

  > label {
    width: 60px;
    color: ${theme.colors.gray.medium};
    font-size: ${theme.fontSize.medium}px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  color: ${theme.colors.gray.medium};
  font-size: ${theme.fontSize.big}px;
  background: transparent;
  font-weight: 500;

  ::placeholder {
    font-weight: 400;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${theme.colors.gray.medium}!important;
  }
`;
