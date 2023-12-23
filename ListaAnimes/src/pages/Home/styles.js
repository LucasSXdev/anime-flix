import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
  padding: 10px;
`;

export const Card = styled.div`
  width: 250px;
  height: 300px;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 16px;
  }
`;
