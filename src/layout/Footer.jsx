import { Link } from "react-router";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-4 md:px-14 py-6 md:py-8">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
        {/* Logo & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center justify-center md:justify-between px-2 md:px-14 py-4 md:py-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start"
          >
            <img
              className="h-8 md:h-10 w-8 md:w-10 object-cover"
              src={logo}
              alt="Hero.io Logo"
            />
            <h1 className="text-sm md:text-lg font-bold text-[#632ee3]">
              HERO.IO
            </h1>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 md:gap-6 items-center">
          {/* Twitter */}
          <a
            href="#"
            className="hover:text-[#1DA1F2] transition-colors duration-300"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="#"
            className="hover:text-red-600 transition-colors duration-300"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className=" w-full my-6 border-gray-800  border-b-1"></div>
      {/* Copyright */}

      <div className="text-center">
        <p className="text-xs md:text-sm text-gray-400 text-center ">
          "© {new Date().getFullYear()} Hero.io. Crafted with 🚀 — All rights
          reserved."
        </p>
      </div>
    </footer>
  );
};

export default Footer;
