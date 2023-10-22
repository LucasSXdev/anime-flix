import { useEffect, useState } from "react";
import api from "../services/Api";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${api}/top/anime`);
      const dataJason = await response.json();
      setAnimes(dataJason.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1>Carregando animes...</h1>;
  }

  return (
    <main>
      <Banner />
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5rem",
        }}
      >
        {animes.map((anime) => {
          return (
            <li
              style={{
                width: "250px",

                listStyle: "none",
                display: "block",
              }}
              key={anime.mal_id}
            >
              <p>{anime.title}</p>
              <Link to={`animeinfo/${anime.mal_id}`}>
                <img
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
