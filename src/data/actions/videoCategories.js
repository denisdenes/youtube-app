import { youtubeAxios } from "../../api/config";
import {
  GET_VIDEO_CATEGORIES_LOADING,
  GET_VIDEO_CATEGORIES_SUCCESS,
  GET_VIDEO_CATEGORIES_ERROR
}                       from "./types";

const getVideoCategoriesLoading = () => {
  return {
    type: GET_VIDEO_CATEGORIES_LOADING
  }
};

const getVideoCategoriesLoadingSuccess = (videoCategories) => {
  return {
    type: GET_VIDEO_CATEGORIES_SUCCESS,
    videoCategories
  }
};

const getVideoCategoriesError = (error) => {
  return {
    type: GET_VIDEO_CATEGORIES_ERROR,
    error
  }
};

export const getVideoCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(getVideoCategoriesLoading());

      const res = await youtubeAxios.get('/videoCategories', { params: { regionCode: 'US' } });

      dispatch(getVideoCategoriesLoadingSuccess(res));
    } catch (error) {
      dispatch(getVideoCategoriesError(error));

      if ( error.response ) {
        console.log(error.response);
      } else if ( error.request ) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
  };
};
