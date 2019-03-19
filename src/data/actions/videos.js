import { youtubeAxios } from "../../api/config";
import { MyError }      from "../../utils/error";
import {
  GET_VIDEOS_LOADING,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
  SEARCH_VIDEOS_QUERY
}                       from "./types";

const getVideosLoading = () => {
  return {
    type: GET_VIDEOS_LOADING
  }
};

const getVideosSuccess = (videos) => {
  return {
    type:    GET_VIDEOS_SUCCESS,
    payload: videos
  }
};

const getVideosError = (error) => {
  return {
    type:    GET_VIDEOS_ERROR,
    payload: error
  }
};

export const searchVideoQuery = (query) => {
  return {
    type:    SEARCH_VIDEOS_QUERY,
    payload: query
  }
};

export const getVideos = (videoCategoryId=null) => {
  return async (dispatch) => {
    try {
      dispatch(getVideosLoading());

      const res = await youtubeAxios.get('/videos', {
        params: {
          chart: 'mostPopular',
          maxResults: 10,
          regionCode: 'US',
          videoCategoryId: videoCategoryId
        }
      });

      dispatch(getVideosSuccess(res));
    } catch (error) {
      dispatch(getVideosError(error.response));
      MyError(error);
    }
  };
};

export const getSearchVideos = (query) => {
  return async (dispatch) => {
    try {
      dispatch(getVideosLoading());

      const res = await youtubeAxios.get('/search', {
        params: {
          maxResults: 10,
          type: 'video',
          q: query
        }
      });

      dispatch(getVideosSuccess(res));
    } catch (error) {
      dispatch(getVideosError(error.response));
      MyError(error);
    }
  };
};
