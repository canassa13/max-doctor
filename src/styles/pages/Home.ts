import styled from 'styled-components';

import theme from '@styles/theme';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${theme.spacing * 4}px;

  max-width: 375px;
  height: 100vh;
  margin: 0 auto;

  h4 {
    color: ${theme.colors.purple.dark};
    cursor: pointer;
    padding-bottom: ${theme.spacing * 2}px;
  }
`;
