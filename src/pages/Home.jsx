import { Link } from "react-router";
import Cart from "../component/Cart";
import Hero from "../layout/Hero";
import useApps from "../utility/useApps";

const Home = () => {
  const { apps, loading, error } = useApps();

  return (
    <div className="mt-8">
      <Hero />
      <div className="my-4 mx-4 lg:mx-6 xl:mx-14  grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
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
