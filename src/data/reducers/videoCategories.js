import {
  GET_VIDEO_CATEGORIES_LOADING,
  GET_VIDEO_CATEGORIES_SUCCESS,
  GET_VIDEO_CATEGORIES_ERROR
} from "../actions/types";

const initialState = {
  videoCategoriesLoading: false,
  videoCategoriesError:   "",
  data:                   []
};

export const videoCategories = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_CATEGORIES_LOADING:
      return {
        ...state,
        videoCategoriesLoading: true
      };
    case GET_VIDEO_CATEGORIES_SUCCESS:
      return {
        ...state,
        videoCategoriesLoading: false,
        data:                   [ ...action.videoCategories.data.items ]
      };
    case GET_VIDEO_CATEGORIES_ERROR:
      return {
        ...state,
        videoCategoriesLoading: false,
        videoCategoriesError:   action.error
      };
    default:
      return state;
  }
};
