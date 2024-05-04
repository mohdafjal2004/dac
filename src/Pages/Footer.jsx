import React from "react";
import imgIcon from "../assets/eye.png";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="w-full inline-flex flex-col justify-center items-center border-b-2 pb-3">
        <p
          className="text-[#eaa162] border bg-gradient-to-b from-[#eaa162] border-[#eaa162] 
         inline-block px-7 rounded-md text-center w-1/3 
         font-extrabold mb-2
         "
        >
          Docs
        </p>

        <div className="rounded-md rounded-b-none w-2/3 md:w-1/ border border-slate-500">
          <div className="font-extrabold items-center rounded-md  ">
            <p className="cursor-pointer hover:bg-gray-200 py-1 pl-2 pr-3 ">
              <input
                type="radio"
                name="RadioDocs"
                id="docs"
                value="docs"
                defaultChecked={true}
                className="cursor-pointer mr-2"
              />
              <label htmlFor="docs" className="cursor-pointer">
                All Documents
              </label>
            </p>
            <p className="cursor-pointer hover:bg-gray-200 py-1 pl-2 pr-3">
              <input
                type="radio"
                name="RadioDocs"
                id="pic"
                value="pic"
                className="cursor-pointer mr-2"
              />
              <label htmlFor="pic" className="cursor-pointer">
                Picture of Title
              </label>
            </p>
          </div>
        </div>
        <div className="border border-slate-400 w-2/3 md:w-1/">
          <div className="font-bold flex gap-3 items-center justify-center py-1">
            <span className="border-2 border-[#eaa162] px-2 rounded-xl bg-[#f9e5d5]">
              Email
            </span>
            <span className="border-2 border-[#eaa162] px-2 rounded-xl bg-[#f9e5d5]">
              Download
            </span>
          </div>
        </div>
      </div>
      <div className="w-full inline-flex flex-col justify-center items-center ">
        <p
          className=" border-[3px] border-[#eaa162] 
         inline-block px-7 rounded-md text-center w-1/2 
         font-extrabold mb-2 text-white bg-[#f9e5d5]
         "
        >
          Cost Info
        </p>

        <div className="rounded-md rounded-b-none w-3/4 md:w-1/ border border-slate-500 p-2">
          <div className="font-bold items-center rounded-md">
            <p className="flex justify-between px-2 items-center cursor-pointer hover:bg-gray-200">
              <span>Cost Price</span>
              <img src={imgIcon} alt={imgIcon} className="h-5" />
              <span className="text-[#eaa162]">$xxxx</span>
            </p>
            <p className="flex justify-between px-2 items-center cursor-pointer hover:bg-gray-200">
              <span>Cost Price</span>
              <img src={imgIcon} alt={imgIcon} className="h-5" />
              <span className="text-[#eaa162]">$1,002</span>
            </p>
            <p className="flex justify-between px-2 items-center cursor-pointer hover:bg-gray-200">
              <span>Cost Price</span>
              <img src={imgIcon} alt={imgIcon} className="h-5" />
              <span className="text-[#eaa162]">$252</span>
            </p>
            <p className="flex justify-between px-2 items-center cursor-pointer hover:bg-gray-200">
              <span>Cost Price</span>
              <img src={imgIcon} alt={imgIcon} className="h-5" />
              <span className="text-[#eaa162]">$16,262</span>
            </p>
            <p className="flex justify-between px-2 items-center cursor-pointer hover:bg-gray-200">
              <span>Cost Price</span>
              <span>$Received</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
