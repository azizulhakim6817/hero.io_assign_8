import { useNavigate } from "react-router";
import errro from "../assets/images/error-404.png";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="mx-auto h-[250px] " src={errro} alt="404-page" />
            <h2 className="text-3xl font-semibold mt-2">
              Oops, page not found!
            </h2>
            <p className="py-2 text-gray-700">
              The App you are requesting is not found on our system. please try
              another apps
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
    </div>
  );
};

export default Error;
