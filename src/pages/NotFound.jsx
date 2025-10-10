import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import notFound from "../assets/images/App-Error.png";
import logo from "../assets/images/logo.png";

const NotFound = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center gap-2 h-[360px]">
        <img
          className="animate-spin h-[30px] md:h-[40px] w-[30px] md:w-[40px] object-cover"
          src={logo}
          alt="logo"
        />
        <h1 className="hidden md:block text-12px md:text-[18px] font-bold text-[#632ee3]">
          HERO.IO
        </h1>
        <div className="flex items-center justify-center">
          <PacmanLoader color="#632ee3" size={15} />
        </div>
      </div>
    );
  }

  //Not Found 
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img className="mx-auto h-[250px]" src={notFound} alt="App Not Found" />
          <h2 className="text-3xl font-semibold mt-2">OPPS!! APP NOT FOUND</h2>
          <p className="py-2 text-gray-700">
            The app you are requesting is not found on our system. Please try another app.
          </p>
          <button
            className="btn px-20 btn-primary"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
