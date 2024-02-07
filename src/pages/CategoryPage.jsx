import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, setLoader } from "../Store/actions/Actions";
import Loader from "../components/Loader";
import ListSeries from "../components/ListSeries";

const CategoryPage = () => {
  //! dispatch kurulum
  const dispatch = useDispatch();
  //! store abonelik
  const state = useSelector((store)=> store.seriesReducer)

  useEffect(() => {
    dispatch(setLoader(true));
    dispatch(getCategory());
  }, []);

  return (
    <>
      {state.isLoading && <Loader />}

      {!state.isLoading && (
         <div className="w-11/12 mx-auto my-5">
          {state.categories.map((cat)=> <ListSeries key={cat.id} cat={cat} />)}
         </div>
      )}
    </>
  )
};

export default CategoryPage;
