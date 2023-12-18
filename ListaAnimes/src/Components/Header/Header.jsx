import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledUl,
  StyledSearchBar,
  StyledDropdown,
} from "./Header.styled";
import { BiCaretDown, BiSearch } from "react-icons/bi";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link>
              Categorias <BiCaretDown />
            </Link>
            <StyledDropdown isOpen={isOpen}>
              <a>Ação</a>
              <a>Comédia</a>
              <a>Fantasia</a>
            </StyledDropdown>
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
          <BiSearch size={20} color="#336699" />
        </label>

        <input type="text" id="search" placeholder="Pesquisar" />
      </StyledSearchBar>
    </StyledHeader>
  );
}
