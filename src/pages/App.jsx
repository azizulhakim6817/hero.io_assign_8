import { Link, Search, LayoutGrid } from "lucide-react";
import useApps from "../utility/useApps";
import Cart from "../component/Cart";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import logo from "../assets/images/logo.png";

const App = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!apps) return;
    setSearchLoading(true);
    const timer = setTimeout(() => {
      const trim = search.trim().toLowerCase();
      const filtered = trim
        ? apps.filter((app) => app.title?.toLowerCase().includes(trim))
        : apps;
      setFilteredApps(filtered);
      setSearchLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [search, apps]);

  // Loading
  if (loading)
    return (
      <div className="flex justify-center items-center gap-2 h-[360px]">
        <img
          className="animate-spin h-[30px] md:h-[40px] w-[30px] md:w-[40px] object-cover"
          src={logo}
          alt=""
        />
        <h1 className="hidden md:block text-12px md:text-[18px] font-bold text-[#632ee3]">
          HERO.IO
        </h1>
        <PacmanLoader color="#632ee3" size={15} />
      </div>
    );

  if (error)
    return <p className="text-center mt-10 text-red-500">Error loading apps</p>;

  if (!apps)
    return <p className="text-center mt-10 text-gray-500">App not found</p>;

  return (
    <div className="mt-8 my-4 mx-4 lg:mx-6 xl:mx-14">
      {/* Title */}
      <div className="text-center mt-4 md:mt-8">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-xl md:text-3xl font-bold">
            Our All Applications
          </h1>
          <LayoutGrid className="text-[#632ee3] rotate-12" size={32} />
        </div>
        <p className="my-4 text-[#627382] text-[14px]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search */}
      <div className="mt-10 mx-4 lg:mx-6 xl:mx-0 xl flex justify-between items-center">
        <h4 className="text-[#001931] text-[16px] md:text-[20px] lg:text-xl font-bold">
          (<span className="text-blue-600">{filteredApps.length}</span>) Apps
          Found
        </h4>
        <div className="px-1 py-1  flex justify-center items-center gap-2 border hover:border-[#632ee3] rounded-sm ">
          <Search size={18} className="text-gray-700 cursor-pointer" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="w-[90px] md:w-full outline-none text-sm my-[3px]"
            placeholder="Search Apps"
          />
        </div>
      </div>

      {/* Cart*/}
      <div className="mt-3 md:mb-18 mx-4 lg:mx-6 xl:mx-0 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {searchLoading ? (
          <div className="col-span-full flex flex-col items-center justify-center h-[200px]">
            <PacmanLoader color="#632ee3" size={20} />
            <p className="mt-3 text-[#632ee3] font-semibold">Searching...</p>
          </div>
        ) : filteredApps.length > 0 ? (
          filteredApps.map((app, i) => <Cart key={i} apps={app} />)
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-8 font-bold text-4xl">
            ❌ No App Found
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
