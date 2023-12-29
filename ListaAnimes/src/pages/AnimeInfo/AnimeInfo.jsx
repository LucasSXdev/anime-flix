import { useEffect, useState } from "react";
import api from "../../services/Api";
import { useParams } from "react-router-dom";
import {
  AreaButtons,
  Container,
  ContainerCharacters,
  Description,
  StyledUl,
} from "./Styles";

export default function AnimeInfo() {
  const { mal_id } = useParams();
  const [animes, setAnimes] = useState({});
  const [characters, setCharacters] = useState([]);
  const [numberCharacters, setNumbercharacters] = useState(20);

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await fetch(`${api}/anime/${mal_id}`);
      const responseJson = await response.json();
      console.log(responseJson.data);
      setAnimes(responseJson.data);
    };

    const fetchCharacters = async () => {
      const response = await fetch(`${api}/anime/${mal_id}/characters`);
      const responseJson = await response.json();
      console.log(responseJson.data.slice(0, 10));
      setCharacters(responseJson.data);
    };

    fetchAnimes();
    fetchCharacters();
  }, [mal_id]);

  return (
    <>
      <Container>
        <Description>
          <h1>{animes.title}</h1>
          <strong>Sinopse:</strong>
          <p>{animes.synopsis}</p>
          <strong>Nota Média:{animes.score}</strong>
          <StyledUl>
            {animes?.genres?.map((genre) => {
              return <li key={genre.mal_id}>{genre.name}</li>;
            })}
          </StyledUl>
          <AreaButtons>
            <button>Salvar</button>
            <a
              target="blank"
              href={`https://youtube.com/results?search_query=${animes.title} trailer}`}
            >
              <button>Trailer</button>
            </a>
          </AreaButtons>
        </Description>
        {animes.images && animes.images.jpg && (
          <img src={animes.images.jpg.large_image_url} alt={animes.title} />
        )}
      </Container>
      <ContainerCharacters>
        <h2>Lista de personagens</h2>
        <ul>
          {characters.slice(0, numberCharacters).map((character) => {
            return (
              <li key={character.mal_id}>
                <strong>{character.character.name}</strong>
                <img
                  src={character.character?.images?.jpg?.image_url}
                  alt={character.character.name}
                />
              </li>
            );
          })}
        </ul>
        <button
          onClick={() =>
            setNumPersonagensRenderizados(
              numberCharacters === 20 ? charactersOrdenados.length : 20
            )
          }
        >
          {numberCharacters === 20 ? "Ver mais" : "Ver menos"}
        </button>
      </ContainerCharacters>
    </>
  );
}
