import { Link } from "react-router";
import gooolePlayImg from "../assets/images/google-play.png";
import appStorImg from "../assets/images/app-stroe.png";
import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="text-center mx-4 mt-4 md:mt-8">
        <h1 className="text-2xl md:text-5xl font-bold">
          We Build <br /> <span className="text-[#632ee3]">Productive </span>
          Apps
        </h1>
        <p className="my-4 text-[#627382] text-[14px]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br /> Our goal is to turn your ideas into digital experiences that
          truly make an impact.
        </p>

        <div className="mx-4">
          <Link
            target="_blank"
            to="https://play.google.com/store/games?hl=en"
            className="btn"
          >
            <img src={gooolePlayImg} alt="googl_play-store" />
            Google Play
          </Link>
          <Link
            target="_blank"
            to="https://www.apple.com/app-store/"
            className="btn ml-2 md:ml-2 my-2 lg:my-0"
          >
            <img src={appStorImg} alt="googl_play-store" />
            Google Play
          </Link>
        </div>
        <img className="mt-6 mx-auto w-[620px] " src={heroImg} alt="" />
      </div>
      {/* Trusted by Millions */}
      <div className="py-12 text-center bg-[#632ee3]">
        <h1 className=" text-3xl font-bold text-white">
          Trusted by Millions, Built for You
        </h1>
        <div className="mt-6 mx-15 md:mx-30  lg:mx-60 xl:mx-100  grid gap-8 grid-cols-1 md:grid-cols-3 ">
          <div>
            <p className="text-[12px] text-gray-300">Total Downloads</p>
            <h1 className="my-2 text-4xl font-bold text-white">29.6M</h1>
            <p className="text-[12px] text-gray-300">
              21% more than last month
            </p>
          </div>
          <div>
            <p className="text-[12px] text-gray-300">Total Reviews</p>
            <h1 className="my-2 text-4xl font-bold text-white">906K</h1>
            <p className="text-[12px] text-gray-300">
              46% more than last month
            </p>
          </div>
          <div>
            <p className="text-[12px] text-gray-300">Active Apps</p>
            <h1 className="my-2 text-4xl font-bold text-white">132+</h1>
            <p className="text-[12px] text-gray-300">31 more will Launch</p>
          </div>
        </div>
      </div>
      {/* Trending Apps */}
      <div className="my-8 mx-4 text-center">
        <h2 className="text-3xl font-bold text-[#001931]">Trending Apps</h2>
        <p className="my-2 text-[14px] text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
    </div>
  );
};

export default Hero;
