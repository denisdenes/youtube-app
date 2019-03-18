import { combineReducers }       from 'redux';
import { videos }                from "./reducers/videos";
import { videoCategories }       from "./reducers/videoCategories";
import { selectedVideoCategory } from "./reducers/selectedVideoCategory";
import { searchVideoQuery }      from "./reducers/searchVideoQuery";
import { selectedVideo }         from "../pages/VideoProfile/data/reducers/selectedVideo";

export default combineReducers({
  videos,
  videoCategories,
  selectedVideoCategory,
  searchVideoQuery,
  selectedVideo
});
