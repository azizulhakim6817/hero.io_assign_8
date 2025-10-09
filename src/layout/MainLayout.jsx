import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
