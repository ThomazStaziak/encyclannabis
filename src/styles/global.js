import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html, 
  body, 
  #root {
    height: 100%;
  }

  body {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #eee;
  }

  ::-webkit-scrollbar-thumb {
    background: #66aa66;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #88aa88;
  }
`;
