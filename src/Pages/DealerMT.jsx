import { useState } from "react";

//Dealer Management Tools
const DealerMT = () => {
  const [dealerMT, setShowMT] = useState(false);
  const handleShowDMT = () => {
    setShowMT(!dealerMT);
  };
  return (
    <div className=" border-2 border-black md:border-none ">
      <div className="fixed md:static w-1/2 top-8 md:hidden">
        <p
          className="bg-[#f8e1cd] py-[1px] text-slate-600 font-semibold text-center"
          onClick={handleShowDMT}
        >
          Dealer MT
        </p>
      </div>

      {/* Tools */}
      <div className="md:overflow-hidden md:px-7">
        <div
          className={`${
            dealerMT ? " translate-x-0" : "-translate-x-96"
          } fixed w-1/2 md:w-full top-[60px] transition-transform duration-1000 ease-out flex flex-col gap-[2px]
            font-semibold md:flex-row md:static md:transform-none md:overflow-x-scroll md:scrollbar-hide md:gap-3
            md:text-center text-white md:font-bold
          `}
        >
          <div className="bg-[#eaa162] rounded-sm pl-4 py-1 md:pl-0  ">
            <p className="w-40 xl:w-52"> Add Inventory</p>
          </div>
          <div className="bg-[#eaa162] rounded-sm pl-4 py-1 md:pl-0 ">
            <p className="w-40 xl:w-52">Sell Inventory</p>
          </div>
          <div className="bg-[#eaa162] rounded-sm pl-4 py-1 md:pl-0">
            <p className="w-40 xl:w-52">Add Cost $</p>
          </div>
          <div className="bg-[#eaa162] rounded-sm pl-4 py-1 md:pl-0 ">
            <p className="w-40 xl:w-52"> Ads. Manager</p>
          </div>
          <div className="bg-[#eaa162] rounded-sm pl-4 py-1 md:pl-0 ">
            <p className="w-40 xl:w-52">VHR</p>
          </div>
          <div className="bg-[#eaa162] rounded-sm pl-4 py-1 md:pl-0 ">
            <p className="w-40 xl:w-52">Docs</p>
          </div>
          <div className="bg-[#eaa162] rounded-sm pl-4 py-1 md:pl-0 ">
            <p className="w-40 xl:w-52">Cost Info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerMT;
