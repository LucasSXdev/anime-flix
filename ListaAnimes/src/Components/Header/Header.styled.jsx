import styled from "styled-components";

export const StyledHeader = styled.header`
  background: var(--background-dark);
  color: var(--text-color-dark);
  width: 100vw;
  border-bottom: 1px solid var(--border-color-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 4rem;

  a {
    color: var(--text-color-dark);
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  min-width: 200px;
  list-style: none;
  gap: 0 5px;

  & a {
    display: flex;
    align-items: center;
    color: var(--text-color-dark);
    text-decoration: none;
    font-size: 18px;
    height: 50px;
    padding: 0 1.2rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: transparent;
      transition: background-color 0.5s ease-in-out;
    }

    &:hover::after {
      background-color: var(--primary-color-dark);
    }
  }
`;

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--primary-color-dark);

  & input {
    color: white;
    background-color: transparent;
    padding: 5px;
    font-size: 16px;
    border: none;
    outline: none;
  }
`;

export const ButtonHeader = styled.button`
  width: 150px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background: var(--text-color-dark);
  transition: 0.3s ease-in-out;
  a {
    color: var(--background-dark);
    font-weight: bold;
  }

  &:hover {
    background: var(--primary-color-dark);
    transform: scale(1.1);
  }
`;
