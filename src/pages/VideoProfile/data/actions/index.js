import { GET_VIDEO_ERROR, GET_VIDEO_LOADING, GET_VIDEO_SUCCESS } from "./types";
import { youtubeAxios }                                          from "../../../../api/config";
import { MyError }                                               from "../../../../utils/error";

const getVideoLoading = () => {
  return {
    type: GET_VIDEO_LOADING
  }
};

const getVideoSuccess = (videos) => {
  return {
    type:    GET_VIDEO_SUCCESS,
    payload: videos
  }
};

const getVideoError = (error) => {
  return {
    type:    GET_VIDEO_ERROR,
    payload: error
  }
};

export const getVideoById = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      dispatch(getVideoLoading());

      const res = await youtubeAxios.get('/videos', {
        params: {
          part: 'snippet, statistics',
          id
        }
      });

      dispatch(getVideoSuccess(res));
    } catch (error) {
      dispatch(getVideoError(error.response));
      MyError(error);
    }
  };
};
