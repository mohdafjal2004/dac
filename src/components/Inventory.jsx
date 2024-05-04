import React from "react";
import googleIcon from "../assets/google.png";
import fbIcon from "../assets/facebook.png";
import peaceIcon from "../assets/peace.png";
import editIcon from "../assets/pen.png";
import deleteIcon from "../assets/bin.png";
const Inventory = ({ data, index }) => {
  console.log(data);
  return (
    <div>
      <div className="bg-[#ebe9ea] mb-4 flex flex-col lg:flex-row lg:items-center  lg:px-3 gap-3">
        {/* Image Div */}
        <div className="lg:w-[20%] ">
          <div className="lg:w-full  ">
            <img
              src={data.imageURL}
              alt="data_Image"
              className=" pt-2 lg:h-28 xl:h-32 lg:w-full lg:box-content"
            />
          </div>
          <div className=" text-white flex justify-between px-4 lg:px-0 items-center py-2">
            <p className="text-[#e7a361] font-semibold lg:font-medium lg:text-xs">
              Added : 10/25/2023
            </p>
            <p className="text-sm md:text-xs flex gap-2 lg:gap-1 ">
              <span className="bg-blue-950 px-2 py-1 lg:px-1 lg:text-center rounded-md hover:scale-110 transition delay-150 ease-in-out cursor-pointer duration-200">
                Exterior
              </span>
              <span className="bg-red-700 px-2 py-1 rounded-md hover:scale-110 transition delay-150 ease-in-out cursor-pointer duration-200">
                Interior
              </span>
            </p>
          </div>
        </div>

        {/* Title and other inventory information */}
        <div className="lg:w-[65%]  xl:pt-2  ">
          <div className="flex flex-col gap-2 justify-center items-center lg:items-start ">
            <p className="text-center font-extrabold text-lg lg:text-xl xl:text-2xl text-slate-600 lg:pr-10">
              {data.title}
            </p>
            <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center  lg:w-full lg:pb-4">
              <div className="text-sm text-slate-600 font-semibold  lg:text-xs xl:text-lg xl:font-bold">
                <span className="text-[#e7a361]">VIN : </span>
                <span>1DDFDHKLJ854d45f</span>
              </div>
              <div className="overflow-hidden lg:flex-1 ">
                <div className="flex font-semibold text-[10px]  lg:w-full lg:items-center  lg:text-xs xl:text-base leading-8 text-slate-500 overflow-x-scroll scrollbar-hide">
                  <span className=" text-black border-r-2 border-b-2 lg:border-b-0 border-slate-600 font-bold w-14 lg:w-16 xl:w-24 text-center lg:box-content lg:px-1">
                    145,352 MI
                  </span>

                  <span className="border-r-2 border-b-2  lg:border-b-0 border-slate-600 w-14 text-center xl:w-24">
                    2WD
                  </span>

                  <span className="border-r-2 border-b-2 lg:border-b-0 border-slate-600 w-14 text-center xl:w-24">
                    2.6L
                  </span>

                  <span className="border-r-2 border-b-2 lg:border-b-0 border-slate-600 w-14 text-center xl:w-24 ">
                    4CYL
                  </span>

                  <span className="border-r-2 border-b-2 lg:border-b-0 border-slate-600 w-14 lg:w-16 text-center xl:w-24">
                    GASOLINE
                  </span>

                  <span className="w-10 md:w-14  border-b-2 lg:border-b-0 border-slate-600 text-center xl:w-24">
                    AUTO
                  </span>
                </div>
              </div>
            </div>
            {/* Market Information */}
            <div
              className="flex text-center overflow-hidden 
            font-semibold w-full lg:w-full  text-[10px] lg:text-sm
              lg:font-bold border-2 
               xl:text-lg
               xl:py-1
              "
            >
              <div
                className=" gap-1  border-r-2
             border-t-2 lg:border-t-0 border-slate-600 flex-1 
                 text-slate-500 py-1 xl:py-3 "
              >
                <p className="text-black h-2/3">P.Date</p>
                <p className="text-[#eaa162] ">14.1.23</p>
              </div>
              <div
                className="  border-r-2 border-t-2  lg:border-t-0
             border-slate-600 flex-1    xl:py-3
              text-slate-500 py-1"
              >
                <p className="text-black h-2/3">Days in</p>
                <p className="text-[#eaa162] ">14</p>
              </div>
              <div
                className="  border-r-2 border-t-2 lg:border-t-0
             border-slate-600 flex-1    xl:py-3
              text-slate-500 py-1"
              >
                <p className="text-black h-2/3">Listing Price</p>
                <p className="text-[#eaa162] ">$16,262</p>
              </div>
              <div
                className="  border-r-2 border-t-2 lg:border-t-0
             border-slate-600 flex-1 xl:py-3
               text-slate-500 py-1"
              >
                <p className="text-black h-2/3">Market Value</p>
                <p className="text-[#eaa162] ">$11,262</p>
              </div>
              <div
                className="  border-r-2 border-t-2 lg:border-t-0
             border-slate-600 flex-1   xl:py-3
              text-slate-500 py-1"
              >
                <p className="text-black h-2/3">All Leads</p>
                <p className="text-[#eaa162] ">23</p>
              </div>
              <div
                className=" border-t-2  lg:border-t-0
             border-slate-600 flex-1 xl:py-3
              text-slate-500 py-1"
              >
                <p className="text-black h-2/3">Inception</p>
                <p className="text-[#eaa162] ">6.2.2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stock and Online Presence */}
        <div className=" flex  flex-col  border-2 lg:flex-row  lg:justify-between lg:w-[20%]   justify-center items-center py-4 lg:py-0 ">
          <div className="flex w-2/3 lg:w-[90%]  flex-col gap-1 md:gap-3 lg:border-r-2 lg:pr-1 xl:pr-4  lg:border-slate-400">
            <p className="text-center">
              <span className="text-[#e7a361] font-bold">Stock no#</span>
              <span>54D45F</span>
            </p>
            <p
              className={` text-center py-1 rounded-md lg:text-xs
            box-border font-semibold hover:scale-110 transition delay-150 ease-in-out cursor-pointer duration-200
          ${
            index === 1 || index === 4
              ? "text-[#eaa162] bg-blue-950"
              : "text-white bg-[#eaa162] px-2 lg:px-[3px]"
          }
          `}
            >
              {index === 1 || index === 4
                ? "Add to Website"
                : "Remove From Website"}
            </p>
            <div className="flex gap-3 items-center justify-center border-b-2 lg:border-b-0 shadow-md border-slate-400 pb-3">
              <div className="border-2 border-slate-0 shadow-slate-500 shadow-md p-2 lg:p-1 rounded-md hover:scale-125 transition delay-75 ease-in-out cursor-pointer">
                <img src={googleIcon} alt={googleIcon} className="h-4 lg:h-3" />
              </div>
              <div className="border-2 border-slate-0 shadow-slate-500 shadow-md p-2 lg:p-1 rounded-md hover:scale-125 transition delay-75 ease-in-out cursor-pointer">
                <img src={fbIcon} alt={fbIcon} className="h-4 lg:h-3" />
              </div>

              <div className="border-2 border-slate-0 shadow-slate-500 shadow-md p-2 lg:p-1 rounded-md hover:scale-125 transition delay-75 ease-in-out cursor-pointer">
                <img
                  src={peaceIcon}
                  alt={peaceIcon}
                  className="h-4 lg:h-3 rounded-full"
                />
              </div>
            </div>
            {/*  */}
          </div>
          <div
            className="  flex py-3 lg:py-0 lg:self-center
           lg:flex-col lg:gap-8 justify-around md:justify-evenly lg:items-center w-2/3 lg:w-2"
          >
            <div className="lg:h-5 lg:w-5 h-7 w-7 box-content  bg-white rounded-full flex items-center justify-center">
              <img
                src={editIcon}
                alt={editIcon}
                className="lg:h-[70%] lg:w-[70%] h-[60%] w-[60%] hover:scale-125 transition delay-75 ease-in-out cursor-pointer"
              />
            </div>
            <div className="lg:h-5 lg:w-5 h-7 w-7 box-content  bg-white rounded-full flex items-center justify-center">
              <img
                src={deleteIcon}
                alt={deleteIcon}
                className="h-[70%] w-[70%] hover:scale-125 transition delay-75 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
