import {
  GET_VIDEOS_LOADING,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR
} from "../actions/types";

const initialState = {
  videosLoading: false,
  videosError:   "",
  data:          []
};

export const videos = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOS_LOADING:
      return {
        ...state,
        videosLoading: true
      };
    case GET_VIDEOS_SUCCESS:
      console.log(payload.data.items);
      return {
        ...state,
        videosLoading: false,
        data:          payload.data.items
      };
    case GET_VIDEOS_ERROR:
      return {
        ...state,
        videosLoading: false,
        videosError:   payload.data.error.message
      };
    default:
      return state;
  }
};
