import Image from "next/image";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
const Tyrecard = () => {
  return (
    <div className="border rounded-md p-4 flex items-center justify-between shadow-md bg-white">
      <div className="">
        <div className="flex items-center gap-2">
          <VerifiedUserIcon className="text-green-500" />
          <p className="text-[14px] text-gray-500 font-semibold">
            5 Year Warranty
          </p>
        </div>
        <div className="flex flex-col">
          <Image src={"/mrf.webp"} width={100} height={100} alt="apollo" />
          <div>
            <p className="text-[14px] font-semibold text-gray-500">
              AMAZER 4G LIFE
            </p>
            <p className="text-[14px] font-semibold text-gray-500">
              145/80 R12
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-start gap-2 md:gap-5 mt-4">
          <p className="px-2 text-[12px] text-white bg-green-500 max-w-fit rounded-md">
            4.9
          </p>
          <p className="text-[14px] font-normal text-gray-500 underline">
            2240 Reviews
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <p>₹3,247</p>
          <p className="text-[12px] text-green-500">Offer avaliable</p>
        </div>
      </div>
      <Image
        src={"/tyre.webp"}
        alt="tyre"
        height={180}
        width={180}
        className="object-contain w-[110px]"
      />
    </div>
  );
};

export default Tyrecard;
