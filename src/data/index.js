import { combineReducers }       from 'redux';
import { videos }                from "./reducers/videos";
import { videoCategories }       from "./reducers/videoCategories";
import { selectedVideoCategory } from "./reducers/selectedVideoCategory";

export default combineReducers({
  videos,
  videoCategories,
  selectedVideoCategory
});
