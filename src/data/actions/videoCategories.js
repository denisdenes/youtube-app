import { youtubeAxios } from "../../api/config";
import { MyError }      from "../../utils/error";
import { getVideos }    from "./videos";
import {
  GET_VIDEO_CATEGORIES_LOADING,
  GET_VIDEO_CATEGORIES_SUCCESS,
  GET_VIDEO_CATEGORIES_ERROR,
  SELECT_VIDEO_CATEGORY
}                       from "./types";

const getVideoCategoriesLoading = () => {
  return {
    type: GET_VIDEO_CATEGORIES_LOADING
  }
};

const getVideoCategoriesSuccess = (videoCategories) => {
  return {
    type:    GET_VIDEO_CATEGORIES_SUCCESS,
    payload: videoCategories
  }
};

const getVideoCategoriesError = (error) => {
  return {
    type:    GET_VIDEO_CATEGORIES_ERROR,
    payload: error
  }
};

export const getVideoCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(getVideoCategoriesLoading());
      const res = await youtubeAxios.get('/videoCategories', {
        params: {
          regionCode: 'US'
        }
      });
      dispatch(getVideoCategoriesSuccess(res));
    } catch (error) {
      dispatch(getVideoCategoriesError(error.response));
      MyError(error);
    }
  };
};

export const selectVideoCategory = (videoCategory) => {
  return async (dispatch) => {
    try {
      dispatch(getVideos(videoCategory.value));

      dispatch({
        type:    SELECT_VIDEO_CATEGORY,
        payload: videoCategory
      });
    } catch (error) {
      MyError(error);
    }
  }
};
