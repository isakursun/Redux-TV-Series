import { actionTypes } from "../../constants/constant";

const initialState = {
  popularSeries: [],
  categories: [],
  isLoading: false,
  series: [],
};

export const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADİNG:
      return {
        ...state,
        isLoading: action.payload,
      };

    case actionTypes.GET_POPULAR_SERİES:
      return {
        ...state,
        popularSeries: action.payload,
        isLoading: false,
      };

    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };

   

    default:
      return state;
  }
};
