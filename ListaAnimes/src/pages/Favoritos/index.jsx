import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, StyledUl } from "./style";

export default function Favoritos() {
  const [anime, setAnimes] = useState([]);

  useEffect(() => {
    const listaAnimes = localStorage.getItem("Anime");
    setAnimes(JSON.parse(listaAnimes) || []);
  }, []);

  const deleteAnime = (id) => {
    let updateAnimes = anime.filter((anime) => anime.mal_id !== id);
    setAnimes(updateAnimes);
    localStorage.setItem("Anime", JSON.stringify(updateAnimes));
  };

  if (anime.length == 0) {
    return (
      <>
        <h1>Você não possui nenhum anime na lista :(</h1>
        <Link to="/">Voltar</Link>
      </>
    );
  }

  return (
    <Container>
      <h1>Meus animes</h1>
      <Link to="/">Voltar</Link>
      <StyledUl>
        {anime.map((anime) => {
          return (
            <li key={anime.mal_id}>
              <img src={anime.images.jpg.image_url}></img>
              <h2>{anime.title}</h2>
              <div>
                <Link to={`/animeinfo/${anime.mal_id}`}>Detalhes do Anime</Link>
                <button onClick={() => deleteAnime(anime.mal_id)}>
                  Excluir Anime
                </button>
              </div>
            </li>
          );
        })}
      </StyledUl>
    </Container>
  );
}
