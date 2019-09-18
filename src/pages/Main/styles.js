import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 40%;

    display: flex;
    flex-direction: column;

    input {
      padding: 8px;
      text-align: center;
      border-radius: 5px 5px 0 0;
      border: 1px solid #888;
      border-bottom: none;

      &::placeholder {
        font-size: 16px;
      }
    }

    button {
      padding: 5px;
      border: 1px solid #888;
      border-top: none;
      border-radius: 0 0 5px 5px;
      background-color: #55aa55;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #66bb66;
      }
    }
  }
`;

export const Logo = styled.div`
  width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin: 15px 0;
    font-size: 25px;
    letter-spacing: 5px;
  }
`;
