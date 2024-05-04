import HListings from "../components/HListings";
import HSelected from "../components/HSelected";

const HeaderTblt = () => {
  return (
    <div>
      <div className=" md:relative md:py-8  md:box-border  hidden md:flex md:justify-between md:gap-8   md:px-5">
        {/* Online Listing and Leads */}
        <div className="md:relative md:box-border md:pl-4  flex flex-1 md:gap-3 md:w-3/4 lg:gap-4 xl:gap-7 2xl:gap-10 ">
          <HListings title="All Inventory" amount="30" />
          <HListings title="All Published Websites" amount="20" />
          <HListings title="Total Not Published" amount="10" />
          <HListings title="Active on Google" amount="20" />
          <HListings title="Active on Facebook Market Place" amount="10" />
          <HListings title="Leads" amount="20" />
        </div>
        {/* Selected + Sort */}
        <div className="  md:mt-[-3%] lg:mt-[-1%] top-2 right-2  lg:w-[22%]">
          <HSelected />
        </div>
      </div>
    </div>
  );
};

export default HeaderTblt;
