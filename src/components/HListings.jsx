const HListings = ({ title, amount }) => {
  return (
    <div className="  ">
      {/* Mobile First design Approach */}

      <div
        className="flex box-border px-2 text-md font-semibold  bg-[#f8e1cd]
        justify-between text-slate-800  items-center text-left py-1  
         md:flex-col  md:h-[90px] md:w-[80px] md:flex-1 md:text-center md:font-[800] md:text-slate-600 md:gap-2
         md:box-border  md:text-xs   md:pb-2 md:shadow-[6px_6px_4px_#f0bd8e]
          lg:text-sm overflow-hidden lg:h-[110px] lg:w-[110px]   xl:h-[150px] xl:w-[150px] 
         "
      >
        <span
          className="md:border-b-2 md:flex md:justify-center
         md:items-center md:box-border md:pt-3  md:pb-2 md:h-2/3  "
        >
          {title}
        </span>
        <span className="md:border-t-[#eaa162]  md:border-2 md:w-full ">
          {amount}
        </span>
      </div>
    </div>
  );
};

export default HListings;
