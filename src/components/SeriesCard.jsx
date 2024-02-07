import { useNavigate } from "react-router-dom";
import { baseImgUrl } from "../constants/constant";

const SeriesCard = ({ series }) => {
  //! navigate
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/detailPage/${series.id}`)}
      className="max-w-40 min-w-24 text-center flex flex-col gap-2 p-1 cursor-pointer transform transition-transform hover:scale-95"
    >
      <img
        className="w-full rounded"
        src={`${baseImgUrl}${series.poster_path}`}
      />

      <h3 className="font-bold">{series.original_name}</h3>
      <span className="font-bold">
        IMDB:{" "}
        <span className="bg-yellow-500 p-1 rounded">
          {series.vote_average.toFixed(1)}
        </span>
      </span>
    </div>
  );
};

export default SeriesCard;
