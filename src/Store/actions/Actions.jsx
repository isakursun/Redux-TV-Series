import axios from "axios";
import { actionTypes, options } from "../../constants/constant";

//! Loading aksiyon fonksiyonu
export const setLoader = (payload) => ({
  type: actionTypes.SET_LOADİNG,
  payload,
});

//! anasayfa da popüler dizi verilerini çekme ve dispatch fonksiyonu
export const getPopularSeries = () => (dispatch) => {
  axios
    .get(
      "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc",
      options
    )
    .then((res) =>
      dispatch({
        type: actionTypes.GET_POPULAR_SERİES,
        payload: res.data.results,
      })
    );
};

//! KATEGORİ İSİMLERİNİ ÇEKME
export const getCategory = () => (dispatch) => {
  axios.get("/genre/tv/list?language=en", options).then((res) =>
    dispatch({
      type: actionTypes.SET_CATEGORY,
      payload: res.data.genres,
    })
  );
};

//! DİZİ DETAY BİLGİLERİNİ ÇEKME
export const getDetails = (id) => (dispatch) => {
  axios.get(`/tv/${id}?language=en-US`, options).then((res) =>
    dispatch({
      type: actionTypes.GET_DETAİLS,
      payload: res.data,
    })
  );
};

//! DİZİ RESİMLERİNİ ÇEKME
export const getImages = (id) => (dispatch) => {
  axios.get(`/tv/${id}/season/1/episode/1/images`, options).then((res) =>
    dispatch({
      type: actionTypes.GET_IMAGES,
      payload: res.data.stills,
    })
  );
};

//! DİZİ AKTÖR VERİLERİNİ ÇEKME
export const getActs = (id) => (dispatch) => {
  axios.get(`/tv/${id}/credits`, options).then((res) => {
    dispatch({
      type: actionTypes.GET_ACTORS,
      payload: res.data.cast,
    });
  });
};

//! dizi video verilerini çekme
export const getVideos = (id)=> (dispatch)=> {
  axios.get(`/tv/${id}/videos`,options).then((res)=> {
    dispatch({
      type: actionTypes.GET_VIDEOS,
      payload: res.data.results,
    })
  })
}
