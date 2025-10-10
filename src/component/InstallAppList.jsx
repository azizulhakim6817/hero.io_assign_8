import downloadIcon from "../assets/images/icon-downloads.png";
import starIcon from "../assets/images/icon-ratings.png";
const InstallAppList = ({ installApp, handleRemoveList }) => {
  
  return (
    <div>
      <div className="mt-2">
        <div className="px-2 py-1 grid gap-4 grid-cols-1 md:grid-cols-2 items-center justify-center bg-white rounded-md shadow-sm">
          {/* App Info */}
          <div className="flex gap-4 md:gap-6 items-center">
            {/* Image */}
            <figure className="flex-shrink-0">
              <img
                className="w-16 h-16 md:w-20 md:h-20 rounded-md object-cover"
                src={installApp.image}
                alt="App Icon"
              />
            </figure>
            {/* Title and download, MB, Stats */}
            <div className="flex-1">
              <h1 className="text-[12px] md:text-[18px] md:text-lg font-semibold text-[#001931]">
                {installApp.title}
              </h1>
              {/* Downloads, Rating, Size */}
              <div className="flex flex-wrap gap-2 mt-1 text-sm md:text-base items-center">
                <div className="flex gap-1 md:gap-2 items-center">
                  <img
                    className="w-3 h-3 md:w-4 md:h-4"
                    src={downloadIcon}
                    alt="Downloads"
                  />
                  <p>{String(installApp.downloads).slice(0, 2)}M</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img
                    className="w-4 h-4 md:w-4 md:h-4"
                    src={starIcon}
                    alt="Rating"
                  />
                  <p>{installApp.ratingAvg}</p>
                </div>
                <p>{String(installApp.downloads).slice(0, 3)}MB</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex  justify-center md:justify-end">
            <button
              onClick={() => handleRemoveList(installApp.id)}
              className="btn px-4 py-2 w-full md:w-30 bg-[#632ee3] text-white  rounded-md hover:bg-[#4b24b8] transition-colors duration-300"
            >
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallAppList;
