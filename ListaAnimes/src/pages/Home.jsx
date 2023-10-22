import { useEffect, useState } from "react";
import api from "../services/Api";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${api}?page=${currentPage}`);
      const dataJason = await response.json();
      setAnimes(dataJason.data);
      console.log(dataJason);
    };

    fetchData();
  }, [setAnimes, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage += 1));
  };

  return (
    <main>
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
              <img
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                src={anime.images.jpg.image_url}
                alt={anime.title}
              />
              <a href={anime.episode_id}>assistir</a>
            </li>
          );
        })}
      </ul>

      <button onClick={handleNextPage}>next</button>
    </main>
  );
}
