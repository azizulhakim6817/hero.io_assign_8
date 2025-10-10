import { Link } from "react-router";
import Cart from "../component/Cart";
import Hero from "../layout/Hero";
import useApps from "../utility/useApps";
import PacmanLoader from "react-spinners/PacmanLoader";
import logo from "../assets/images/logo.png";

const Home = () => {
  const { apps, loading, error } = useApps();

  if (loading)
    return (
      <div className="flex justify-center items-center gap-2 h-screen">
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
  if (!apps)
    return <p className="text-center mt-10 text-gray-500">App not found</p>;

  return (
    <div className="mt-8">
      <Hero />
      <div className="my-4 mx-4 lg:mx-6 xl:mx-14  grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {apps?.slice(0, 8)?.map((apps, i) => (
          <Cart key={i} apps={apps} />
        ))}
      </div>
      {/*show all button */}
      <div className="m-10 md:mb-14 lg:my-20 text-center">
        <Link
          to="app"
          className="px-8 py-2 font-bold rounded-md bg-[#632ee3] text-white"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
