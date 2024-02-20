import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    return <h2>Você não possui nenhum anime na lista :(</h2>;
  }

  return (
    <>
      <h1>Meus animes</h1>
      <ul>
        {anime.map((anime) => {
          return (
            <li key={anime.mal_id}>
              <span>{anime.title}</span>
              <div>
                <Link to={`/animeinfo/${anime.mal_id}`}>Detalhes do filme</Link>
                <button onClick={() => deleteAnime(anime.mal_id)}>
                  Excluir filme
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
