import rating from "../assets/images/icon-ratings.png";
import downloadIcon from "../assets/images/icon-downloads.png";
import { useNavigate } from "react-router";

const Cart = ({ apps }) => {
  const navigate = useNavigate();
  const { id, title, image, ratingAvg, downloads } = apps;

  const handleNavigateDetailPage = () => {
    navigate(`/app-details/${id}`);
  };

  return (
    <>
      {/* cart */}
      <div
        onClick={handleNavigateDetailPage}
        className="card bg-base-100 shadow-md transform transition-transform duration-600 hover:scale-105"
      >
        <figure className="p-2">
          <img className="w-full rounded-md" src={image} alt="Shoes" />
        </figure>
        <div className="px-3 pb-4">
          <h2 className="text-[18px] md:text-[16px] lg:text-[15px] xl:text-[20px] font-bold text-[#001931]">
            {title.slice(0, 22)}
          </h2>

          <div className="mt-2 card-actions justify-between">
            <div className=" px-2 flex gap-2 justify-between items-center bg-[#F1F5E8] rounded-md">
              <img className="h-3" src={downloadIcon} alt="Ratings" />
              <p className="text-[#00D390]">{String(downloads).slice(0, 2)}M</p>
            </div>
            <div className=" px-2 flex gap-2 justify-between items-center bg-[#FFF0E1] rounded-md">
              <img className="h-3" src={rating} alt="Ratings" />
              <p>{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
