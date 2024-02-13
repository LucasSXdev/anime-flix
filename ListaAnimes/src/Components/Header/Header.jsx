import { Link, useLocation } from "react-router-dom";
import {
  StyledHeader,
  StyledUl,
  StyledSearchBar,
  ButtonHeader,
} from "./Header.styled";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <StyledHeader>
        <h1>AnimeFlix</h1>
        <nav>
          <StyledUl>
            <li>
              <Link to="">Favoritos</Link>
            </li>
            <li>
              <Link to="/manga">Mangás</Link>
            </li>
          </StyledUl>
        </nav>
        <StyledSearchBar>
          <label
            htmlFor="search"
            style={{ lineHeight: "100%", cursor: "pointer" }}
          >
            <BiSearch size={20} color="#336699" />
          </label>

          <input type="text" id="search" placeholder="Pesquisar" />
        </StyledSearchBar>
      </StyledHeader>
    );
  } else {
    return (
      <StyledHeader>
        <Link to="/">
          <h1>AnimeFlix</h1>
        </Link>
        <ButtonHeader>
          <Link to="/favoritos">Favoritos</Link>
        </ButtonHeader>
      </StyledHeader>
    );
  }
}
