import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 10px;

  img {
    display: block;
    width: 40vw;
    height: 90vh;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  width: 50vw;
  padding: 10px;

  p {
    font-size: 16px;
  }
`;
