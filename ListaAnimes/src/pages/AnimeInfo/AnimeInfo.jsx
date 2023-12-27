import { useEffect, useState } from "react";
import api from "../../services/Api";
import { useParams } from "react-router-dom";
import { Container, Description } from "./Styles";

export default function AnimeInfo() {
  const { mal_id } = useParams();
  const [animes, setAnimes] = useState({});

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await fetch(`${api}/anime/${mal_id}`);
      const responseJson = await response.json();
      console.log(responseJson.data);
      setAnimes(responseJson.data);
    };

    fetchAnimes();
  }, [mal_id]);

  return (
    <Container>
      <Description>
        <h1>{animes.title}</h1>
        <strong>Sinopse:</strong>
        <p>{animes.synopsis}</p>
        <strong>Nota Média:{animes.score}</strong>
        <strong>
          Gêneros:
          <ul>
            {animes.genres.map((genre) => {
              return (
                <li key={genre.mal_id}>
                  <p>{genre.name}</p>
                </li>
              );
            })}
          </ul>
        </strong>
      </Description>
      {animes.images && animes.images.jpg && (
        <img src={animes.images.jpg.large_image_url} alt={animes.title} />
      )}
    </Container>
  );
}
