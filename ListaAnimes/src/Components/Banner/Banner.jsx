import { useEffect, useState } from "react";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import {
  StyledSwiper,
  StyledSwiperSlide,
  SwiperContainer,
} from "./StyledBanner";

export default function Banner() {
  const [animeImg, setAnimeImg] = useState([]);

  useEffect(() => {
    const fetchImgUrl = async () => {
      const response = await fetch(`${api}/top/anime`);
      const responseJson = await response.json();
      setAnimeImg(responseJson.data.slice(0, 20));
    };

    fetchImgUrl();
  }, []);

  return (
    <SwiperContainer>
      <h2>Mais populares</h2>
      <StyledSwiper
        loop={true}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        speed={800}
      >
        {animeImg.map((img) => {
          return (
            <StyledSwiperSlide key={img.mal_id}>
              <Link>
                <img src={img.images.jpg.large_image_url} alt={img.title} />
                <p>{img.title}</p>
              </Link>
            </StyledSwiperSlide>
          );
        })}
      </StyledSwiper>
    </SwiperContainer>
  );
}
