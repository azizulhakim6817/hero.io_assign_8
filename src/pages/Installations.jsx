import { useEffect, useState } from "react";
import InstallAppList from "../component/InstallAppList";
import { toast } from "react-toastify";
import { AiOutlineCodepen } from "react-icons/ai";

const Installations = () => {
  const [installListApps, setInstallListApps] = useState([]);
  const [sortAppLists, setSortAppLists] = useState("none");

  // get localStorage data ------------------------
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("appsData"));
    if (saveList) return setInstallListApps(saveList);
  }, []);

  //Remove List ----------------------------------------
  const handleRemoveList = (id) => {
    const existingList = JSON.parse(localStorage.getItem("appsData")) || [];
    const updatedList = existingList.filter((e) => e.id !== id);
    setInstallListApps(updatedList);
    localStorage.setItem("appsData", JSON.stringify(updatedList));
    toast.success("Uninstall is successfull");
  };

  //sort----------------
  const sortedItem = () => {
    if (sortAppLists === "high-low") {
      return [...installListApps].sort((a, b) => b.downloads - a.downloads);
    } else if (sortAppLists === "low-high") {
      return [...installListApps].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installListApps;
    }
  };

  return (
    <div>
      <div className="mt-8 mb-12 my-4 mx-4 lg:mx-6 xl:mx-16">
        <div className="text-center mt-4 md:mt-8">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-xl md:text-3xl font-bold">
              Your Installed Apps
            </h1>
         <AiOutlineCodepen className="text-[#632ee3]" size={42} />
          </div>
          <p className="my-4 text-[#627382] text-[14px]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div>
          <div className="mb-4 flex justify-between items-center">
            <h4 className="text-[#001931]  text-[16px] md:text-xl font-bold">
              <span className=" text-[#632ee3]">
                {" "}
                ({installListApps.length})
              </span>{" "}
              Apps Found
            </h4>
            {/* sort */}
            <select
              value={sortAppLists}
              onChange={(e) => setSortAppLists(e.target.value)}
              className="w-[130px] md:w-[200px] border-none outline-none px-2 py-[8px] rounded-md bg-white"
            >
              <option value="none" disabled>
                App by lists
              </option>
              <option value="high-low">High-Low</option>
              <option value="low-high">Low-High</option>
            </select>
          </div>
        </div>
        {/* 1-div-flex--- store data */}
        <div>
          {sortedItem().map((installApp, i) => (
            <InstallAppList
              key={i}
              installApp={installApp}
              handleRemoveList={handleRemoveList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installations;
