"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import SavingsIcon from "@mui/icons-material/Savings";

const Payment = () => {
  return (
    <div className="bg-white">
      <div className="md:px-[90px] py-6 px-[20px]">
        <h3 className="md:text-2xl uppercase text-lg font-semibold text-gray-700">
          Payment Modes
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
              slidesPerView: 1.2,
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

            1124: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="mt-6"
        >
          <SwiperSlide className="border p-4 hover:bg-blue-50 rounded-md mb-10 shadow-lg ">
            <div className="flex flex-col gap-2 items-center ">
              <AccountBalanceIcon className="h-10 w-10 text-blue-500" />
              <p className="text-lg font-semibold text-gray-500">Account</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 hover:bg-yellow-50 shadow-lg">
            <div className="flex flex-col gap-2 items-center">
              <CreditCardIcon className="h-10 w-10 text-yellow-500" />
              <p className="text-lg font-semibold text-gray-500">Credit Card</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 hover:bg-purple-50 shadow-lg">
            <div className="flex flex-col gap-2 items-center">
              <AccountBalanceWalletIcon className="h-10 w-10 text-purple-500" />
              <p className="text-lg font-semibold text-gray-500">
                Online Wallets
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 hover:bg-green-50 shadow-lg">
            <div className="flex flex-col gap-2 items-center">
              <SavingsIcon className="h-10 w-10 text-green-500" />
              <p className="text-lg font-semibold text-gray-500">Net Banking</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-4 rounded-md mb-10 hover:bg-rose-50 shadow-lg">
            <div className="flex flex-col gap-2 items-center">
              <SensorOccupiedIcon className="h-10 w-10 text-rose-500" />
              <p className="text-lg font-semibold text-gray-500">UPI</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Payment;
