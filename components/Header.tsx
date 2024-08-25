"use client";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";
import HeaderToolTip from "./HeaderTooltip";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

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
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white py-2">
      <div className="flex items-center justify-between max-w-full px-5 md:px-[90px]">
        <div className="md:hidden" onClick={() => setOpen(true)}>
          <MenuIcon />
        </div>
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
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="">
          <div className="flex items-center p-5 justify-between">
            <Image
              src={"/TP-logo.webp"}
              width={100}
              height={100}
              alt="logo"
              className=""
            />
            <div onClick={() => setOpen(false)}>
              <CloseIcon />
            </div>
          </div>
          {Object.keys(data).map((key, idx) => (
            <Accordion className="min-w-[300px]" key={idx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {key}
              </AccordionSummary>
              <AccordionDetails className="flex flex-col">
                {data[key as keyof typeof data] &&
                  data[key as keyof typeof data].length > 0 &&
                  data[key as keyof typeof data].slice(1).map((item, idx) => (
                    <p
                      key={idx}
                      className="text-[16px] px-2 py-1  text-blue-500"
                    >
                      {item}
                    </p>
                  ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
