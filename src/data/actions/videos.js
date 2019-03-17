import { youtubeAxios } from "../../api/config";
import { MyError }      from "../../utils/error";
import {
  GET_VIDEOS_LOADING,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR
}                       from "./types";

const getVideosLoading = () => {
  return {
    type: GET_VIDEOS_LOADING
  }
};

const getVideosSuccess = (videoCategories) => {
  return {
    type:    GET_VIDEOS_SUCCESS,
    payload: videoCategories
  }
};

const getVideosError = (error) => {
  return {
    type:    GET_VIDEOS_ERROR,
    payload: error
  }
};

export const getVideos = () => {
  return async (dispatch) => {
    try {
      dispatch(getVideosLoading());

      const res = await youtubeAxios.get('/videos', {
        params: {
          chart: 'mostPopular',
          maxResults: 10,
          regionCode: 'US',
          videoCategoryId: '1'
        }
      });

      dispatch(getVideosSuccess(res));
    } catch (error) {
      dispatch(getVideosError(error.response));
      MyError(error);
    }
  };
};
