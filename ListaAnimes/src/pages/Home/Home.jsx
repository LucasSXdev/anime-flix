import React, { useEffect, useState } from "react";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import { Card, Container } from "./styles";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch(`${api}/top/anime?filter=bypopularity`);
        const responseJson = await response.json();
        setAnimes(responseJson.data);
        console.log(responseJson.data);
        setLoad(false);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchAnimeData();
  }, []);

  if (load) {
    return <h1>Carregando animes...</h1>;
  }

  return (
    <Container>
      {animes.map((anime) => (
        <Card key={anime.mal_id}>
          <h2>{anime.title}</h2>
          <Link to={`/animeinfo/${anime.mal_id}`}>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
          </Link>
        </Card>
      ))}
    </Container>
  );
}
