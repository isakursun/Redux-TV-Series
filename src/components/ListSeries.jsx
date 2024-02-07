import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import { baseImgUrl, options } from "../constants/constant";
import { useNavigate } from "react-router-dom";

const ListSeries = ({ cat }) => {
  //! yönlendirme için navigate
  const navigate = useNavigate();
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get(
        `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=${cat.id}`,
        options
      )
      .then((res) => setSeries(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-xl pb-1 border-b">{cat.name}</h1>
      <Splide options={{autoWidth:true, gap:"20px", pagination:false }}>
        {series.map((item)=> (
          <SplideSlide key={item.id}>
            <img onClick={()=> navigate(`/detailPage/${item.id}`)} className="max-w-40 min-w-24 max-h-60 min-h-36 rounded transform transition-transform hover:scale-105 cursor-pointer" src={`${baseImgUrl}${item.poster_path}`} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ListSeries;
