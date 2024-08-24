import { Rating } from "@mui/material";
import Image from "next/image";

const Reviewcard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <p className="px-2 text-[12px] text-white bg-green-500 max-w-fit rounded-md">
          5.0
        </p>
        <Rating
          className=" text-[12px] md:text-[16px]"
          name="read-only"
          value={5}
          readOnly
        />
      </div>
      <p className="text-gray-500 text-[14px] line-clamp-3">
        Best tyre shop in Indirapuram. Good dealing with customer. All types
        tyre available here. Price also responsible. Overall good experience
      </p>
      <div className="flex items-center gap-2 mt-4">
        <Image
          src={"/profile.jpg"}
          alt="profile-pic"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-[14px] text-gray-700 font-semibold">Deepanshu</p>
          <p className="text-[12px] text-gray-500 font-normal">
            5 months on TyrePlex
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
