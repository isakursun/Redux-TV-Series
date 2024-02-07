import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseImgUrl } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  getActs,
  getDetails,
  getImages,
  getVideos,
} from "../Store/actions/Actions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IoPlayCircleOutline } from "react-icons/io5";

const DetailPage = () => {
  //! navigate
  const navigate = useNavigate();
  //! url deki parametreyi aldık
  const { id } = useParams();
  //! dispatch kurulum
  const dispatch = useDispatch();
  //! store aboneliği
  const { actors, details, images, videos } = useSelector(
    (store) => store.detailReducer
  );

  useEffect(() => {
    dispatch(getDetails(id));
    dispatch(getImages(id));
    dispatch(getActs(id));
    dispatch(getVideos(id));
  }, []);

  console.log(actors);

  return (
    <div className="w-10/12 mx-auto my-10 flex flex-col gap-10">
      <div className=" md:flex">
        {/* resim */}
        <div className="flex justify-center md:w-1/5">
          <img
            className="rounded h-80 sm:h-96"
            src={`${baseImgUrl}${details.poster_path}`}
          />
        </div>
        {/* içerik */}
        <div className="md:w-4/5 text-center flex flex-col gap-5 justify-around p-2">
          <h3 className="font-bold text-3xl">{details.name}</h3>
          <p className="text-gray-400">#{details.tagline}</p>
          <p className="text-2xl">{details.number_of_seasons} Season</p>
          <p className="text-2xl">{details.number_of_episodes} Episode</p>
          <p className="text-wrap">{details.overview}</p>

          <a
            href={`https://www.youtube.com/watch?v=${videos[0]?.key}`}
            target="_blank"
          >
            <button className="bg-blue-400 p-1 rounded font-bold">
              <IoPlayCircleOutline className="text-4xl" />
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-center font-bold text-xl">Photos</h1>
          <Splide options={{ autoWidth: true, gap: "25px", pagination: false }}>
            {images?.map((image) => (
              <SplideSlide>
                <img
                  className="w-52 h-32 rounded transform transition-transform hover:scale-110 cursor-pointer"
                  src={`${baseImgUrl}${image.file_path}`}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-center font-bold text-xl">Cast List</h1>
          <Splide options={{ autoWidth: true, gap: "25px", pagination: false }}>
            {actors?.map((act) => (
              <SplideSlide>
                <div className="flex flex-col items-center">
                  <img
                    className="w-40 rounded transform transition-transform hover:scale-110 cursor-pointer"
                    src={`${baseImgUrl}${act.profile_path}`}
                  />
                  <h1 className="text-center font-bold">{act.character}</h1>
                  <p className="text-center text-gray-500">{act.name}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
