import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Tyrecard from "./TyreCard";

const FilterSection = () => {
  return (
    <div className="md:px-[90px] px-5 my-6 md:my-0 md:py-6">
      <h3 className="md:text-2xl text-lg uppercase font-semibold text-gray-700">
        Tyres sold by this Dealer
      </h3>
      <div className="flex items-center mt-5 md:mt-0">
        <div className="flex-1 hidden md:block" />
        <div className="flex-1 flex items-center gap-5 pr-4 md:pr-4">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Birla</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"Birla"}
              label="Age"
              className="bg-white"
            >
              <MenuItem value={"Birla"}>Birla</MenuItem>
              <MenuItem value={20}>MRF</MenuItem>
              <MenuItem value={30}>CEAT</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Popular</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"Most Popular"}
              label="Age"
              className="bg-white"
            >
              <MenuItem value={"Most Popular"}>Most Popular</MenuItem>
            </Select>
          </FormControl>
          <div className="hidden md:block">
            <p className="text-[14px] text-blue-500 underline">Advance</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-8">
        <Tyrecard />
        <Tyrecard />
        <Tyrecard />
        <Tyrecard />
        <Tyrecard />
        <Tyrecard />
        <Tyrecard />
        <Tyrecard />
      </div>
      <div className="flex items-center justify-center mt-8">
        <Button variant="outlined" className="">
          View more
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
