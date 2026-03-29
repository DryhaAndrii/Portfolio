"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { technologies } from "../technologies.data";
import TechnologyCard from "../technologyCard/technologyCard";

import "swiper/css";
import "./carousel.scss";

export default function Carousel() {
  return (
    <Swiper
      className="technologies-carousel"
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={24}
      loop
      speed={700}
      threshold={12}
      grabCursor
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {technologies.map((item, i) => (
        <SwiperSlide key={`${item.title}-${i}`}>
          <TechnologyCard item={item} index={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
