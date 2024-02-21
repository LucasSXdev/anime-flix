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
import Header from "../../Components/Header/Header";

export default function AnimeInfo() {
  const { mal_id } = useParams();
  const [animes, setAnimes] = useState({});
  const [characters, setCharacters] = useState([]);
  const [numberCharacters, setNumbercharacters] = useState(20);

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await fetch(`${api}/anime/${mal_id}`);
      const responseJson = await response.json();
      setAnimes(responseJson.data);
    };

    const fetchCharacters = async () => {
      const response = await fetch(`${api}/anime/${mal_id}/characters`);
      const responseJson = await response.json();
      setCharacters(responseJson.data);
    };

    fetchAnimes();
    fetchCharacters();
  }, [mal_id]);

  const addAnime = () => {
    const listaAnimes = localStorage.getItem("Anime");
    let animesSalvos = JSON.parse(listaAnimes) || [];

    const hasAnime = animesSalvos.some(
      (animeSalvo) => animeSalvo.mal_id === animes.mal_id
    );

    if (hasAnime) {
      alert("esse anime já foi adicionado");
      return;
    }

    animesSalvos.push(animes);
    localStorage.setItem("Anime", JSON.stringify(animesSalvos));
    alert("anime salvo com sucesso");
  };

  return (
    <>
      <Header />
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
            <button onClick={addAnime}>Salvar</button>
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
          onClick={() => {
            numberCharacters === 20
              ? setNumbercharacters(40)
              : setNumbercharacters(20);
          }}
        >
          {numberCharacters == 20 ? "Ver mais" : "Ver menos"}
        </button>
      </ContainerCharacters>
    </>
  );
}
