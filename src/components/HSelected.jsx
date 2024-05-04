import React, { useState } from "react";
import sortIcon from "../assets/sort.png";

const HSelected = () => {
  const dropArr = Array.from({ length: 10 });
  const sortArr = ["Name", "Date Added", "Model Year"];
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showSelected, setShowSelected] = useState(false);
  console.log(showSelected);
  const handleSortBar = () => {
    setShowSortMenu(!showSortMenu);
  };
  const handleSelectedView = () => {
    setShowSelected(!showSelected);
  };
  return (
    <div className="  w-full">
      <div className=" w-full   text-sm relative ">
        {/* DropDown and Sort */}
        <div className="flex  justify-between  md:gap-  gap-1 md:flex-1">
          {/* DropDown Items */}
          <select className="h-auto border-2 border-b border-slate w-1/3  border-slate-700 rounded-sm sm:flex-1">
            {dropArr.map((_, i) => {
              return (
                <option
                  key={i}
                  value={i}
                  className="bg-[#f8e1cd] border-2 border-b border-slate border-black"
                >
                  {i + 1}
                </option>
              );
            })}
          </select>

          {/* Sort Bar */}
          <div className="sm:flex-1 flex-1 ">
            <button
              className="flex relative sm:w-full w-full items-center justify-center border-2 border-b border-slate border-slate-700 rounded-sm 
            px-1 gap-2  border-slate flex-1 md:box-border m"
              onClick={handleSortBar}
            >
              <span className="">Sort By</span>
              <img src={sortIcon} alt={sortIcon} className="h-5" />
            </button>
          </div>
          {/*  Sort Items Menu */}
          <div
            className={`bg-[#f8e1cd] sm:w-[95%] w-[93%] right-2 border-b border-slate absolute  top-6 transform flex flex-col duration-1000 ease-in-out  ${
              showSortMenu
                ? "translate-y-0 md:translate-y-3"
                : "-translate-y-40 "
            }`}
          >
            {sortArr.map((list, i) => {
              return (
                <p
                  key={i}
                  className="flex box-border px-2 border-b border-slate text-sm font-semibold  bg-[#f8e1cd]
        justify-between text-slate-800  items-center text-left py-1 border border-black"
                >
                  {list}
                </p>
              );
            })}
          </div>
        </div>
        {/* Selected Items */}
        <div className="text-left text-xs font-bold md:font-semibold text-slate-600 mt-[2px]">
          <p
            className="font-extrabold cursor-pointer"
            onClick={handleSelectedView}
          >
            Selected : <span className="text-[#eaa162]">4</span>
          </p>

          <div
            className={` ${
              showSelected ? "h-24 md:h-20 lg:h-28 xl:h-44 2xl:h-52" : "h-0 "
            }  overflow-scroll `}
          >
            <div className="flex flex-col gap-1 bg-[#f8e1cd] md:bg-white">
              <p className="flex justify-between px-2 border-b-[2px] border-slate-400 border-r-[2px] rounded-[4px] py-[2px] shadow-[2px_2px_9px_rgb(0,0,0,0.3)]">
                <span>2019 NISSAN SEDAN</span>
                <span>54d45F</span>
              </p>
              <p className="flex justify-between px-2 border-b-[2px] border-slate-400 border-r-[2px] rounded-[4px] py-[2px] shadow-[2px_2px_9px_rgb(0,0,0,0.3)]">
                <span>2018 Ford Fusion</span>
                <span>54d45F</span>
              </p>
              <p className="flex justify-between px-2 border-b-[2px] border-slate-400 border-r-[2px] rounded-[4px] py-[2px] shadow-[2px_2px_9px_rgb(0,0,0,0.3)]">
                <span>2019 Nissan Altima</span>
                <span>54d45F</span>
              </p>
              <p className="flex justify-between px-2 border-b-[2px] border-slate-400 border-r-[2px] rounded-[4px] py-[2px] shadow-[2px_2px_9px_rgb(0,0,0,0.3)]">
                <span>2010 Audi Q7</span>
                <span>54d45F</span>
              </p>
              <p className="flex justify-between px-2 border-b-[2px] border-slate-400 border-r-[2px] rounded-[4px] py-[2px] shadow-[2px_2px_9px_rgb(0,0,0,0.3)]">
                <span>2010 Audi Q7</span>
                <span>54d45F</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HSelected;
