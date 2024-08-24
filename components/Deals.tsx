"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Deals = () => {
  return (
    <div className="bg-white">
      <div className="md:pl-[90px] py-6 pl-[20px]">
        <h3 className="md:text-2xl uppercase text-lg font-semibold text-gray-700">
          Deals in
        </h3>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            720: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          className="mt-6"
        >
          {/* {itemData.map((item, idx) => ( */}
          <SwiperSlide className="border p-4 rounded-md mb-10 shadow-lg">
            <div className="flex flex-col items-center">
              <Image src={"/mrf.webp"} alt="mrf" height={100} width={100} />
              <p className="text-xl font-semibold text-gray-500">MRF</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src={"/ceat-logo.jpg"}
                alt="mrf"
                height={100}
                width={100}
              />
              <p className="text-xl font-semibold text-gray-500">CEAT</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src={"/goodyear.png"}
                alt="mrf"
                height={100}
                width={100}
                className="h-[75px] w-full"
              />
              <p className="text-xl font-semibold text-gray-500">GOODYEAR</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src={"/apollo1.webp"}
                alt="mrf"
                height={100}
                width={100}
                className="h-[75px] w-[100%]"
              />
              <p className="text-xl font-semibold text-gray-500">APOLLO</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src={"/stone.png"}
                alt="mrf"
                height={100}
                width={100}
                className="h-[75px] w-[100%]"
              />
              <p className="text-xl font-semibold text-gray-500">BRIDGESTONE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src={"/jk.jpg"}
                alt="mrf"
                height={100}
                width={100}
                className="h-[75px] w-[100%]"
              />
              <p className="text-xl font-semibold text-gray-500">JKTYRE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 shadow-lg">
            <div className="flex flex-col items-center">
              <Image src={"/mrf.webp"} alt="mrf" height={100} width={100} />
              <p className="text-xl font-semibold text-gray-500">MRF</p>
            </div>
          </SwiperSlide>
          {/* // ))} */}
        </Swiper>
      </div>
    </div>
  );
};

export default Deals;
