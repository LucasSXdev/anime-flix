import { Link } from "react-router-dom";
import { StyledHeader, StyledUl, StyledSearchBar } from "./Header.syled";
import { BiCaretDown, BiSearch } from "react-icons/bi";

export default function Header() {
  return (
    <StyledHeader>
      <h1>AnimeFlix</h1>

      <nav>
        <StyledUl>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/manga">Mangás</Link>
          </li>
          <li>
            <Link to="/episodios">
              Categorias <BiCaretDown />
            </Link>
          </li>
          <li>
            <Link to="/news">Notícias</Link>
          </li>
        </StyledUl>
      </nav>

      <StyledSearchBar>
        <label
          htmlFor="search"
          style={{ lineHeight: "100%", cursor: "pointer" }}
        >
          <BiSearch size={20} />
        </label>

        <input type="text" id="search" placeholder="Pesquisar" />
      </StyledSearchBar>
    </StyledHeader>
  );
}
