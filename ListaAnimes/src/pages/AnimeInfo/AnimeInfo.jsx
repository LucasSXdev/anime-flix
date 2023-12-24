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
        <p>{animes.synopsis}</p>
      </Description>
      <img src={animes.images.jpg.image_url} alt="" />
    </Container>
  );
}
