import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 10px;

  img {
    display: block;
    width: 40vw;
    height: 90vh;
    object-fit: cover;
  }

  Strong {
    display: block;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Description = styled.div`
  width: 50vw;
  padding: 10px;

  p {
    font-size: 16px;
  }
`;

export const StyledUl = styled.div`
  list-style: none;
  display: flex;
  gap: 15px;
  width: 60%;

  li {
    padding: 5px;
    color: var(--text-color-dark);
    background: var(--background-dark);
    font-weight: bold;
  }
`;

export const AreaButtons = styled.div`
  display: flex;
  width: 80%;
  margin-top: 15px;
  gap: 10px;

  button {
    width: 200px;
    padding: 10px;
    border: 2px solid;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      color: white;
      background: var(--primary-color-dark);
    }
  }
`;

export const ContainerCharacters = styled.div`
  width: 100vw;
  margin: 10px;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 8px;
    list-style: none;

    li {
      width: 150px;
      margin-top: 10px;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  button {
    width: 150px;
    padding: 5px;
    margin-left: 15px;
    font-size: 24px;
    border: 2px solid;
    background: none;
    cursor: pointer;
  }
`;
