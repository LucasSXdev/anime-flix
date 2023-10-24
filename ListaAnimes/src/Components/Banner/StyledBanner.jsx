import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

export const SwiperContainer = styled.div`
  background-color: var(--background-dark);
  padding: 20px 2rem 0;
  position: relative;
  color: var(--text-color-dark);
`;

export const StyledSwiper = styled(Swiper)`
  padding: 15px;
  width: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  height: 70vh;

  a {
    text-decoration: none;
    color: var(--text-color-dark);
  }

  img {
    width: 300px;
    height: 400px;
    transition: 0.5s;
    border-radius: 5px;
    filter: brightness(80%);

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 5px 8px rgba(255, 255, 255, 0.5);
      filter: brightness(100%);
    }
  }
`;
