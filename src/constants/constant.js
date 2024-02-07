import axios from "axios";

//! temel resim url i
export const baseImgUrl = "https://image.tmdb.org/t/p/original";

//! axios temel url
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//! istek kimliği
export const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGJmMWYxOGI3NTcxYTVlZmQ4NmJmMmM5ZWRlMmI3ZSIsInN1YiI6IjY1NGE3YTczNDFhNTYxMzM2OTNiZmZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ok0AYyE3-DWPld_WMf1sXpU3fCyRM_EZZwk8Xbddi8U",
  },
};

//! aksiyon tipleri
export const actionTypes = {
  GET_POPULAR_SERİES: "GET_POPULAR_SERİES",
  SET_LOADİNG: "SET_LOADİNG",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SERİES: "SET_SERİES",
  GET_DETAİLS: "GET_DETAİLS",
  GET_IMAGES: "GET_IMAGES",
  GET_ACTORS: "GET_ACTORS",
  GET_VIDEOS: "GET_VIDEOS",
};
