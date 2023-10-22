import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--background-dark);
  color: var(--text-color-dark);
  width:100%;
  border-bottom:1px solid var(--border-color-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 2rem;
  }

  
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 0 15px;

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
