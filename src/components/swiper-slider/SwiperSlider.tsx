import React from 'react'
import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { theme } from '@styles/theme'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper'

const SwiperContainer = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.colors.brand.accent} !important;
    font-size: 30px;
    width: 30px;
    height: 30px;

    &::after {
      font-size: 30px;
      width: 30px;
      height: 30px;
    }
  }

  .swiper-pagination-bullet {
    background-color: ${theme.colors.brand.accent};
  }
`

const SwiperSlider = ({ images }) => {
  const swiperOptions = {
    navigation: true,
    pagination: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 200,
  }

  return (
    <SwiperContainer {...swiperOptions}>
      {images.map((image, idx: number) => (
        <SwiperSlide key={`slider-item-${idx}`}>{image}</SwiperSlide>
      ))}
    </SwiperContainer>
  )
}

export default SwiperSlider
