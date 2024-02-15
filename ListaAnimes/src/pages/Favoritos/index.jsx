import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Favoritos() {
  const [anime, setAnimes] = useState([]);

  useEffect(() => {
    const listaAnimes = localStorage.getItem("Anime");
    setAnimes(JSON.parse(listaAnimes) || []);
  }, []);

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
                <button>Excluir filme</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
