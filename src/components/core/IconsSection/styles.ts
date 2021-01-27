import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${theme.spacing * 8}px;

  @media screen and (max-width: 320px) {
    margin-top: ${theme.spacing}px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  li {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 109px;
    text-align: center;

    p {
      padding: ${theme.spacing * 2}px 0;
      font-size: ${theme.fontSize.medium * 2}px 0;
      color: ${theme.colors.gray.light};
    }
  }
`;
