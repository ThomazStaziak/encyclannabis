import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  z-index: 2;
  padding: 15px;
  background-color: #66bb66;
  box-shadow: 0px 4px 2px -2px #777;

  display: flex;

  position: fixed;
  top: 0;

  a {
    width: 5%;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: transform 1s ease-out;

    display: flex;
    justify-content: space-around;
    align-items: center;

    &:hover {
      transform: translateX(-5px);
    }
  }

  p {
    width: 95%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 6px;
  }
`;
