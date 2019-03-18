import {
  GET_VIDEO_LOADING,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_ERROR
} from "../actions/types";

const initialState = {
  videoLoading: false,
  videoError:   '',
  data:         {}
};

export const selectedVideo = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEO_LOADING:
      return {
        ...state,
        videoLoading: true
      };
    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        videoLoading: false,
        data:         payload.data.items[0]
      };
    case GET_VIDEO_ERROR:
      return {
        ...state,
        videoLoading: false,
        videoError:   payload.data.error.message
      };
    default:
      return state;
  }
};
