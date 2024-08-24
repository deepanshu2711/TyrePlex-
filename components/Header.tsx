"use client";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import React from "react";
import HeaderToolTip from "./HeaderTooltip";
import MenuIcon from "@mui/icons-material/Menu";

const data = {
  "Car Tyres": [
    "Popular Car Tyres Brands",
    "MRF Tyres",
    "CEAT Tyres",
    "Appolo Tyres",
    "JK Tyres",
    "All Car Tyres",
  ],
  "Bike Tyres": [
    "Popular Bike Tyres Brands",
    "MRF Tyres",
    "CEAT Tyres",
    "Appolo Tyres",
    "JK Tyres",
    "All Bike Tyres",
  ],
  "Tyre Pressure": ["All Tyres Preassue "],
  "Commercial Tyres": ["All Commercial Tyres"],
  Accessories: [
    "All Accessories",
    "Batteries",
    "Alloy Wheels",
    "Wheel Alingment",
  ],
  More: [
    "More Services",
    "CashBack offer",
    "Find tyre Dealer",
    "Compare Tyres",
    "Wheel Balancing",
  ],
};

const Header = () => {
  return (
    <div className="bg-white py-2">
      <div className="flex items-center justify-between max-w-full px-5 md:px-[90px]">
        <MenuIcon className="md:hidden" />
        <Image
          src={"/TP-logo.webp"}
          width={100}
          height={100}
          alt="logo"
          className="md:block hidden"
        />
        <div className="items-center gap-5 md:flex hidden">
          {Object.keys(data).map((key) => (
            <HeaderToolTip
              key={key}
              title={key}
              items={data[key as keyof typeof data]}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <PersonIcon />
          <Button variant="text">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
