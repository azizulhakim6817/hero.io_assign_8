import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
            <p className="py-6 text-gray-700">
              Oops! The page you are looking for does not exist or has been
              moved.
            </p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
