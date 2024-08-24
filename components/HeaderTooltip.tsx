import {
  Button,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import React from "react";

interface HeaderToolTipPrps {
  title: string;
  items: string[];
}

const HeaderToolTip = ({ title, items }: HeaderToolTipPrps) => {
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <div className="flex items-center flex-col">
            <p className="text-[14px] text-gray-500 p-2">{items[0]}</p>
            <div className="flex flex-col ">
              {items &&
                items.length > 0 &&
                items.slice(1).map((item, idx) => (
                  <Button key={idx} className="text-[14px] font-medium">
                    {item}
                  </Button>
                ))}
            </div>
          </div>
        </React.Fragment>
      }
    >
      <div className="flex flex-col group ">
        <p className="font-semibold text-[14px] text-gray-500 hover:text-blue-500 cursor-pointer">
          {title}
        </p>
        <div className="h-[2px] group-hover:bg-blue-500 bg-white w-full" />
      </div>
    </HtmlTooltip>
  );
};

export default HeaderToolTip;

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
