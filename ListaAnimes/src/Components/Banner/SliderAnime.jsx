import { StyledSwiper, SwiperContainer } from "./StyledBanner";

export default function Banner({ category, children }) {
  return (
    <SwiperContainer>
      <h2>{category}</h2>
      <StyledSwiper
        slidesPerView={4}
        slidesPerGroup={4}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        speed={800}
      >
        {children}
      </StyledSwiper>
    </SwiperContainer>
  );
}
