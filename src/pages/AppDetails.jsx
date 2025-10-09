import { useParams } from "react-router";
import downloadIcon from "../assets/images/icon-downloads.png";
import starIcon from "../assets/images/icon-ratings.png";
import reviewIcon from "../assets/images/icon-review.png";
import useApps from "../utility/useApps";
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

const AppDetails = () => {
  const { apps, loading, error } = useApps();
  const { id } = useParams();
  const appId = parseInt(id);

  // find single app
  const app = apps?.find((e) => e.id === appId);

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">Error loading app</p>;
  if (!app)
    return <p className="text-center mt-10 text-gray-500">App not found</p>;

  //localStorage handle
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

  return (
    <div className="w-full ">
      <div className="mt-8 my-4 mx-4 lg:mx-6 xl:mx-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 md:justify-start md:items-start">
          {/* image */}
          <div className="flex-shrink-0">
            <img
              className="mx-auto rounded-md"
              src={app.image}
              alt={app.title}
            />
          </div>
          {/* content */}
          <div className="grid grid-cols-1 md:grid-cols-1 ">
            <div>
              <h2 className="text-xl md:text-[20px] lg:text-3xl font-bold text-[#001931] ">
                {app.title}
              </h2>
              <p className="my-2 text-[18px] text-[#627382]">
                Developed by
                <span className="text-[#632ee3]"> productive.io</span>
              </p>
              <div className=" w-60 md:w-100 lg:w-160 my-3 border-gray-400  border-b-1"></div>
            </div>
            <div className="flex items-center flex-none md:flex gap-4">
              <div >
                <img src={downloadIcon} alt="download" />
                <p className="my-2 text-[14px] text-[#001931]">Downloads</p>
                <h2 className="text-xl md:text-2xl font-bold text-[#001931]">
                  {String(app.downloads).slice(0, 2)}M
                </h2>
              </div>
              <div>
                <img src={starIcon} alt="star" />
                <p className="my-2 text-[14px] text-[#001931]">
                  Average Ratings
                </p>
                <h2 className="text-xl md:text-2xl  font-bold text-[#001931]">
                  {app.ratingAvg}
                </h2>
              </div>
              <div>
                <img src={reviewIcon} alt="" />
                <p className="my-2 text-[14px] text-[#001931]">Total Reviews</p>
                <h2 className="text-xl md:text-2xl  font-bold text-[#001931]">
                  {String(app.downloads).slice(0, 3)}K
                </h2>
              </div>
            </div>
            {/* installatoins button */}
            <button
              onClick={() => handleAddToApps(app)}
              className="btn my-2 mb-3 w-full md:w-[240px]  text-xl font-bold text-white bg-[#632ee3]"
            >
              Install Now ({String(app.downloads).slice(0, 3)}MB)
            </button>
          </div>
        </div>
      </div>
      {/* Ratings-Chart---- */}
      <div className="mt-8 my-4 mx-4 lg:mx-6 xl:mx-14 ">
        <h3 className="mb-2 md:text-[18px] lg:text-xl font-bold text-[#001931]">
          Ratings
        </h3>
        <div className="p-8 w-full h-64 md:h-80 bg-white shadow-sm rounded-md">
          <ResponsiveContainer width="80%" height="100%">
            <BarChart
              layout="vertical"
              data={app?.ratings}
              margin={{ top: 10, right: 20, left: 60, bottom: 10 }}
            >
              {/* gradient fill */}
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.9} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 12 }} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: "#6b7280", fontSize: 12 }}
                width={20}
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
        <div className="">
          <h3 className="mt-8 md:text-[18px] lg:text-xl font-bold text-[#001931]">
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
