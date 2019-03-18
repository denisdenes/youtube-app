import {
  GET_VIDEO_CATEGORIES_LOADING,
  GET_VIDEO_CATEGORIES_SUCCESS,
  GET_VIDEO_CATEGORIES_ERROR,
} from "../actions/types";

const initialState = {
  videoCategoriesLoading: false,
  videoCategoriesError:   "",
  data:                   []
};

export const videoCategories = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEO_CATEGORIES_LOADING:
      return {
        ...state,
        videoCategoriesLoading: true
      };
    case GET_VIDEO_CATEGORIES_SUCCESS:
      let videoCategories = [];

      payload.data.items.map(item => {
        let category = {
          id:    item.id,
          value: item.id,
          label: item.snippet.title
        };
        return videoCategories.push(category);
      });

      return {
        ...state,
        videoCategoriesLoading: false,
        data:                   videoCategories
      };
    case GET_VIDEO_CATEGORIES_ERROR:
      return {
        ...state,
        videoCategoriesLoading: false,
        videoCategoriesError:   payload.data.error.message
      };
    default:
      return state;
  }
};
