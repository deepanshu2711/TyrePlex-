import { Button } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-gray-100 md:px-[90px] px-5 my-6 md:my-0  py-6">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[14px] text-gray-800">
            Have a question about Tyres?
          </p>
          <p className="text-[14px] text-gray-500">
            Get an answer in 24 hours from our experts.
          </p>
          <div className="w-full flex items-center gap-5">
            <input
              className="p-3 bg-white w-full focus-within:outline-none flex-1 rounded-full border border-blue-500"
              placeholder="Ask or search your question"
              type="text"
            />
            <Button className="text-blue-500 bg-white rounded-md border border-blue-500">
              Ask
            </Button>
          </div>
        </div>
      </div>
      <div className="md:px-[90px] py-6 flex md:flex-row flex-col items-center justify-between border-b">
        <div>
          <Image
            src={"/TP-logo.webp"}
            width={100}
            height={100}
            alt="logo"
            className=""
          />
          <div className="flex items-center justify-around mt-4">
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="md:grid hidden grid-cols-3  gap-40">
          <div className="flex flex-col">
            <p className="text-[14px] font-semibold text-gray-500">
              Who We Are
            </p>
            <p className="text-[14px] font-semibold text-gray-500">
              Are you a Tyre Dealer?
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] font-semibold text-gray-500">
              Privacy Policy
            </p>
            <p className="text-[14px] font-semibold text-gray-500">
              Terms of use
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] font-semibold text-gray-500">
              Contact Us
            </p>
            <p className="text-[14px] font-semibold text-gray-500">Career</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[14px] font-semibold text-gray-500 text-center p-4">
          ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
