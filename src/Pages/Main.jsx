import arrow from "../assets/arrow.png";
import search from "../assets/search.png";
import Inventory from "../components/Inventory";
import InventoryData from "../components/InvertoryData.json";
const Main = () => {
  return (
    <div className="w-full">
      <div className="mt-20">
        {/* Search Bar */}
        <div className="flex md:px-8 lg:px-16 xl:px-20">
          {/* All selection field */}
          <div
            className="inline-flex items-center
           justify-between border-2 border-black gap-2 px-1
          bg-[#eaa162] "
          >
            <span>All</span>
            <img src={arrow} alt={arrow} className="h-3" />
          </div>
          {/* Input Field */}
          <input
            type="text"
            className="border-2 border-slate-500 flex-1 px-2"
            placeholder="Search In Inventory"
          />
          <div>
            {/* Search Button */}
            <div className="border-2 border-black bg-[#eaa162]">
              <img src={search} alt={search} className="h-6 p-1" />
            </div>
          </div>
        </div>
        {/* Inventory Items */}
        <div>
          {InventoryData.map((car, index) => {
            return (
              <div
                key={index}
                className="md:px-8 lg:relative lg:px-16 xl:px-20"
              >
                <Inventory data={car} index={index + 1} />
                <div className="absolute -left-8 top-[70px] w-40 text-center">
                  <p className="absolute left-10">
                    <span className="border-2 border-slate-400 p-1  rounded-full">{index + 1}</span>
                  </p>
                  <p
                    className={`${
                      index === 0 || index === 1 || index === 2 || index === 3
                        ? "bg-[#d9975c]"
                        : "bg-[#f4cfb3]" 
                    } -rotate-90 font-medium`}
                  >
                    {index === 0 || index === 1 || index === 2 || index === 3
                      ? "SELECTED"
                      : "SELECT"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
