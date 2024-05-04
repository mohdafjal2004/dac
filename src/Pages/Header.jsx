// Online Listings and Leads
import { useEffect, useRef, useState } from "react";
import HListings from "../components/HListings";
import HSelected from "../components/HSelected";

const Header = () => {
  const [showOLL, setOLL] = useState(false);
  const handleOLL = () => {
    setOLL(!showOLL);
  };

  return (
    <>
      <div className="w-screen fixed md:hidden">
        {/* Mobile First Design  for Buttons Group*/}
        <div className="flex w-full relative md:hidden font-medium text-slate-700">
          <button
            className="bg-[#eaa162] text-white  py-1 flex-1"
            onClick={handleOLL}
          >
            Listings & Leads
          </button>
          <div className="relative  flex-1 text-center bg-white" >
            <p className="py-1">Selected Items</p>
            <div className="absolute w-full flex-1 style={{ backgroundColor: bgColor }}">
              <HSelected />
            </div>
          </div>
        </div>

        {/* Header Listing and Leads Mobile Design */}
        <div className="md:hidden">
          <div
            className={`${
              showOLL ? " translate-x-0" : "-translate-x-full"
            } fixed w-1/2  transition-transform duration-1000 ease-out 
          `}
          >
            <HListings title="All Inventory" amount="30" />
            <HListings title="All Published Websites" amount="20" />
            <HListings title="Total Not Published" amount="10" />
            <HListings title="Active on Google" amount="20" />
            <HListings title="Active on Facebook Market Place" amount="10" />
            <HListings title="Leads" amount="20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
