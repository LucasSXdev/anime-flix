import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  background: red;
`;

export const Card = styled.div`
  width: 250px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
  background: blue;

  img {
    width: 100%;
  }
`;
