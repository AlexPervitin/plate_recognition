import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    html, body, #root {
      font-size: 14px;
      height: 100%;
      font-family: 'Rubik', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Rubik', sans-serif;
      @supports not selector(::-webkit-scrollbar) {
        scrollbar-width: thin;
      }
    }
    * ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      border-radius: 100px;
    }
    * ::-webkit-scrollbar-thumb {
      border-radius: 100px;
      background: ${(p) => p.theme.colors.scroll};
    }
    * ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 100px;
    }
    * ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-weight: 400;
      color: ${(p) => p.theme.colors.textMain};
      background-color: ${(p) => p.theme.colors.bg};
      &.fixed {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
      }
      &.fixed_in_place {
        overflow: hidden;
      }
    }
    #root {
      height: 100%;
    }
    a {
      text-decoration: none;
    }
    img {
      pointer-events: none;
    }
`;
