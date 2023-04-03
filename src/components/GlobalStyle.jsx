import React from 'react';
// Styled Components에서는 createGlobalStyle 이라는 함수를 제공
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono', monospace;
  }
`;

export default GlobalStyle;
