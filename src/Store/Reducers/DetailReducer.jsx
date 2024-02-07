import { actionTypes } from "../../constants/constant";

const initialState = {
  details: [],
  images: [],
  actors: [],
  videos: [],
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAİLS:
      return {
        ...state,
        details: action.payload,
      };

    case actionTypes.GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };

    case actionTypes.GET_ACTORS:
      return {
        ...state,
        actors: action.payload,
      };

    case actionTypes.GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };

    default:
      return state;
  }
};
