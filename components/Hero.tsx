import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Button, Rating } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Hero = () => {
  return (
    <div className="max-w-7xl flex items-center justify-between mx-auto mt-6">
      <div className="flex flex-col gap-1 max-w-[600px]">
        <div className="flex items-center gap-5">
          <h3 className="text-2xl font-semibold text-gray-700">
            SHREE HEMKUNT TYRES AND SERVICES
          </h3>
          <div className="flex items-center gap-1">
            <VerifiedUserIcon className="text-green-500" />
            <p className="text-green-500 text-[14px]">Verified</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <p className="px-2 text-[12px] text-white bg-green-500 max-w-fit rounded-md">
            4.9
          </p>
          <Rating className="text-[20px]" name="read-only" value={5} readOnly />
          <p className="text-[14px] font-normal text-gray-500 underline">
            2240 Reviews
          </p>
          <Button className="text-[12px] p-0" variant="outlined">
            Rate
          </Button>
        </div>
        <div className="flex items-center gap-8">
          <FmdGoodIcon />
          <p className="text-[14px] text-gray-500">
            PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
            INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
          </p>
        </div>
        <div className="flex items-center gap-8">
          <AccessTimeIcon />
          <p className="text-[14px] text-gray-500">
            Open - Monday to Sunday - 10:00AM to 8:00PM
          </p>
        </div>
      </div>
      <div>
        <Button
          variant="outlined"
          className="text-rose-500 mt-5 border-rose-500 hover:border-rose-700 hover:bg-rose-50"
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default Hero;
