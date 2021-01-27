import styled from 'styled-components';

import theme from '@styles/theme';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: ${theme.headerHeight}px;
  text-align: center;
  margin-bottom: ${theme.spacing * 4}px;

  h4 {
    color: ${theme.colors.purple.dark};
  }

  @media screen and (max-width: 320px) {
    margin-bottom: ${theme.spacing}px;
    h4 {
      font-size: ${theme.fontSize.medium}px;
    }
  }
`;
