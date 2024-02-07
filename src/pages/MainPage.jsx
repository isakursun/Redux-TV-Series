import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularSeries, setLoader } from "../Store/actions/Actions";
import Loader from "../components/Loader";
import SeriesCard from "../components/SeriesCard";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  //! dispatch kurulum
  const dispatch = useDispatch();
  //! store abonelik
  const state = useSelector((store) => store.seriesReducer);
  //! navigate kurulum
  const navigate = useNavigate();

  useEffect(() => {
    //! loading dispatch
    dispatch(setLoader(true));
    //! dizi çekme dispatch
    dispatch(getPopularSeries());
  }, []);

  return (
    <>

      {state.isLoading && <Loader />}

      {!state.isLoading && (
        <div className="w-11/12 mx-auto">
          {/* sol taraf */}
          <div className="text-center">
            <h1 className="font-bold text-3xl py-3">
              Discover the best TV series.
            </h1>
            <button onClick={()=> navigate("/categoryPage")} className="bg-yellow-500 font-bold p-2 rounded transform transition-transform hover:scale-105">
              Discover
            </button>
          </div>
          {/* sağ taraf */}
          <div className="flex-1 flex flex-wrap gap-5 justify-center py-4">
            {state.popularSeries.map((series) => (
              <SeriesCard key={series.id} series={series} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
