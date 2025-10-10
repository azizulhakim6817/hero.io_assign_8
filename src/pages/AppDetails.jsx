import { useParams } from "react-router";
import downloadIcon from "../assets/images/icon-downloads.png";
import starIcon from "../assets/images/icon-ratings.png";
import reviewIcon from "../assets/images/icon-review.png";
import useApps from "../utility/useApps";
import PacmanLoader from "react-spinners/PacmanLoader";
import logo from "../assets/images/logo.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getStoredBook } from "../utility/localStorage";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);

  const { apps, loading, error } = useApps();
  const [install, setInstall] = useState(false);

  const app = apps?.find((e) => e.id === appId);

  useEffect(() => {
    const appData = getStoredBook();
    const isInstalled = appData.some((p) => p.id === appId);
    if (isInstalled) setInstall(true);
  }, [appId]);

  //localStorage handle----------
  const handleAddToApps = (app) => {
    const appData = getStoredBook();
    try {
      const isDublicate = appData.some((p) => p.id === app.id);
      if (isDublicate) return toast.error("Already added in app data");
      const updataApp = [...appData, app];
      localStorage.setItem("appsData", JSON.stringify(updataApp));
      toast.success("Installation is successfull");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = (app) => {
    handleAddToApps(app);
    setInstall(true);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center gap-2 h-[360px]">
        <img
          className=" animate-spin h-[30px] md:h-[40px] w-[30px] md:w-[40px] object-cover"
          src={logo}
          alt=""
        />
        <h1 className="hidden md:block text-12px md:text-[18px] font-bold  text-[#632ee3]">
          HERO.IO
        </h1>
        <div className="flex items-center justify-center ">
          <PacmanLoader color="#632ee3" size={15} />
        </div>
      </div>
    );
  if (error)
    return <p className="text-center mt-10 text-red-500">Error loading app</p>;
  if (!app)
    return <p className="text-center mt-10 text-gray-500">App not found</p>;

  return (
    <div className="w-full ">
      <div className="mt-8 my-4 mx-4 lg:mx-6 xl:mx-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-center items-center md:justify-start md:items-start">
          {/* image */}
          <div className="flex-shrink-0">
            <img
              className="mx-auto w-60 xl:w-80 h-full object-cover rounded-md"
              src={app.image}
              alt={app.title}
            />
          </div>
          {/* content */}
          <div className="grid mt-0 md:mt-3 lg:mt-4 grid-cols-1 md:grid-cols-1">
            <div>
              <h2 className="text-center md:text-start text-xl md:text-[20px] lg:text-3xl font-bold text-[#001931] ">
                {app.title}
              </h2>
              <p className="text-center md:text-start mt-1 text-[18px] text-[#627382]">
                Developed by
                <span className="text-[#632ee3]"> productive.io</span>
              </p>
              <div className=" w-full md:w-100 lg:w-160 my-3 border-gray-400  border-b-1"></div>
            </div>
            <div className="flex items-center flex-none md:flex gap-4">
              <div>
                <img
                  className="mx-auto w-8 h-8"
                  src={downloadIcon}
                  alt="download"
                />
                <p className=" text-[14px] text-[#001931]">Downloads</p>
                <h2 className=" text-center text-xl md:text-2xl font-bold text-[#001931]">
                  {String(app.downloads).slice(0, 2)}M
                </h2>
              </div>
              <div>
                <img className="mx-auto w-8 h-8" src={starIcon} alt="star" />
                <p className=" text-[14px] text-[#001931]">Average Ratings</p>
                <h2 className="text-center text-xl md:text-2xl  font-bold text-[#001931]">
                  {app.ratingAvg}
                </h2>
              </div>
              <div>
                <img className="mx-auto w-8 h-8" src={reviewIcon} alt="" />
                <p className=" text-[14px] text-[#001931]">Total Reviews</p>
                <h2 className=" text-center text-xl md:text-2xl  font-bold text-[#001931]">
                  {String(app.downloads).slice(0, 3)}K
                </h2>
              </div>
            </div>
            {/* installatoins button */}
            <button
              onClick={() => handleButtonClick(app)}
              className="btn mt-2 md:mt-5 lg:mt-2  w-full md:w-[240px]  text-xl font-bold text-white bg-[#632ee3]"
            >
              {install ? "Installed" : `Install Now`}
            </button>
          </div>
        </div>
      </div>
      {/* Ratings-Chart---- */}
      <div className=" mx-4 lg:mx-6 xl:mx-14 ">
        <h3 className="mx-4 md:mx-0 md:text-[18px] lg:text-xl font-bold text-[#001931]">
          Ratings
        </h3>
        <div className=" w-full h-64 md:h-80 ">
          <ResponsiveContainer width="80%" height="100%">
            <BarChart
              layout="vertical"
              data={app?.ratings}
              margin={{ top: 10, right: 20, left: 60, bottom: 10 }}
            >
              {/* gradient fill */}
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#632ee3" stopOpacity={0.9} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 12 }} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: "#6b7280", fontSize: 12 }}
                width={20}
                reversed
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}
              />
              <Legend />
              <Bar
                dataKey="count"
                fill="url(#barGradient)"
                radius={[0, 8, 8, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* description---------- */}
        <div className="mx-4 md:mx-0">
          <h3 className="mt-4 md:text-[18px] lg:text-xl font-bold text-[#001931]">
            Descriptoin
          </h3>
          <p className="mt-1 mb-16 text-[16px] text-[#627382]">
            {app.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
