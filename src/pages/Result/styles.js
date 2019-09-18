import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 50px);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: lighter;
    margin: 100px 0 40px;
  }

  & > div {
    width: 50%;
    margin: 8px 0;
    border-top: 3px solid #55a555;

    h3 {
      width: 80%;

      display: flex;
      justify-content: space-between;

      span {
        font-weight: lighter;
      }
    }
  }

  .loading {
    margin: auto;
  }
`;
