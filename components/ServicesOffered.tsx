"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import OutboundIcon from "@mui/icons-material/Outbound";

const ServicesOffered = () => {
  return (
    <div className="md:pl-[90px] pl-5 my-6 md:my-0 md:py-6">
      <h3 className="md:text-2xl text-lg uppercase font-semibold text-gray-700">
        Services Offered
      </h3>
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
        <SwiperSlide className="mb-10">
          <div className="h-[400px] bg-emerald-500 flex flex-col gap-4 items-center p-4">
            <Image
              src={"/ali.webp"}
              alt="wheel-Alingment"
              height={200}
              width={200}
              className=""
            />
            <div className="flex flex-col gap-4 ">
              <p className="font-semibold text-gray-100">Wheel Alingment</p>
              <p className="font-medium text-[14px] text-gray-200 line-clamp-3">
                Wheel alignment involves a mechanical adjustment of vehicle
                suspension to influence the direction and angle of the tyres
                contact with the road surface.
              </p>
            </div>
            <OutboundIcon className="h-12 w-12 absolute bottom-5 right-5" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="h-[400px] bg-blue-500 flex flex-col gap-4 items-center p-4">
            <Image
              src={"/bal.webp"}
              alt="wheel-Balancing"
              height={200}
              width={200}
              className=""
            />
            <div className="flex flex-col gap-4 ">
              <p className="font-semibold text-gray-100">Wheel Balancing</p>
              <p className="font-medium text-[14px] text-gray-200 line-clamp-3">
                Wheel balancing involves distributing the weight of the tire and
                wheel assembly evenly to prevent vibrations and wobbling at
                higher speeds.
              </p>
            </div>
            <OutboundIcon className="h-12 w-12 absolute bottom-5 right-5" />
          </div>
        </SwiperSlide>
        {/* // ))} */}
      </Swiper>
    </div>
  );
};

export default ServicesOffered;
