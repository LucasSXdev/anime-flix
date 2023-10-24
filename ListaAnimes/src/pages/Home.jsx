import { useEffect, useState } from "react";
import api from "../services/Api";
import { Link } from "react-router-dom";
import SliderAnime from "../Components/Banner/SliderAnime";
import { StyledSwiperSlide } from "../Components/Banner/StyledBanner";

export default function Home() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchImgUrl = async () => {
      try {
        const response = await fetch(`${api}/anime`);
        const responseJson = await response.json();
        setAnime(responseJson.data);
        console.log(responseJson);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchImgUrl();
  }, []);

  function filterCategory(category) {
    return anime.filter((img) =>
      img.genres.some((genre) => genre.name === category)
    );
  }

  return (
    <>
      <SliderAnime category="Mais populares">
        {anime.map((img) => (
          <StyledSwiperSlide key={img.mal_id}>
            <Link to={`animeinfo/${img.mal_id}`}>
              <img src={img.images.jpg.large_image_url} alt={img.title} />
              <p>{img.title}</p>
            </Link>
          </StyledSwiperSlide>
        ))}
      </SliderAnime>

      <SliderAnime category="Comédia">
        {filterCategory("Comedy").map((img) => (
          <StyledSwiperSlide key={img.mal_id}>
            <Link to={`animeinfo/${img.mal_id}`}>
              <img src={img.images.jpg.large_image_url} alt={img.title} />
              <p>{img.title}</p>
            </Link>
          </StyledSwiperSlide>
        ))}
      </SliderAnime>

      <SliderAnime category="Ação">
        {filterCategory("Action").map((img) => (
          <StyledSwiperSlide key={img.mal_id}>
            <Link to={`animeinfo/${img.mal_id}`}>
              <img src={img.images.jpg.large_image_url} alt={img.title} />
              <p>{img.title}</p>
            </Link>
          </StyledSwiperSlide>
        ))}
      </SliderAnime>

      <SliderAnime category="Fantasia">
        {filterCategory("Romance").map((img) => (
          <StyledSwiperSlide key={img.mal_id}>
            <Link to={`animeinfo/${img.mal_id}`}>
              <img src={img.images.jpg.large_image_url} alt={img.title} />
              <p>{img.title}</p>
            </Link>
          </StyledSwiperSlide>
        ))}
      </SliderAnime>
    </>
  );
}
