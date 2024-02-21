import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const StyledUl = styled.ul`
  margin-top: 40px;
  width: 60vw;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 40px;
    img {
      width: 80px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
