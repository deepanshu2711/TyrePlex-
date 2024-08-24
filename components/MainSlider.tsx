"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainSlider = () => {
  const itemData = ["/ceat.jpg", "/ceat1.avif"];
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 5000 }}
      >
        {itemData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={item}
              alt="image"
              width={400}
              height={400}
              className="w-full h-[65vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
