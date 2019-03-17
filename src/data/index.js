import { combineReducers } from 'redux';
import { videos }          from "./reducers/videos";
import { videoCategories } from "./reducers/videoCategories";

export default combineReducers({
  videos,
  videoCategories
});
