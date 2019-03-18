import {
  SEARCH_VIDEOS_QUERY
} from "../actions/types";

export const searchVideoQuery = (state = "", { type, payload }) => {
  switch (type) {
    case SEARCH_VIDEOS_QUERY:
      return payload;
    default:
      return state;
  }
};
