"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reviewcard from "./Reviewcard";

const Reviews = () => {
  return (
    <div className="bg-white flex">
      <div className="max-w-full md:pl-[90px] py-6 px-4">
        <p className="md:text-2xl text-lg uppercase font-semibold text-gray-700">
          Google Reviews
        </p>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          //   navigation
          scrollbar={{ draggable: true }}
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            720: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mt-6"
        >
          {/* {itemData.map((item, idx) => ( */}
          <SwiperSlide className="border p-4 mb-10 rounded-md shadow-lg">
            <Reviewcard />
          </SwiperSlide>
          <SwiperSlide className="border p-4 mb-10 rounded-md shadow-lg">
            <Reviewcard />
          </SwiperSlide>
          <SwiperSlide className="border p-4 mb-10 rounded-md shadow-lg">
            <Reviewcard />
          </SwiperSlide>
          <SwiperSlide className="border p-4 mb-10 rounded-md shadow-lg">
            <Reviewcard />
          </SwiperSlide>
          <SwiperSlide className="border p-4 mb-10 rounded-md shadow-lg">
            <Reviewcard />
          </SwiperSlide>
          {/* // ))} */}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
