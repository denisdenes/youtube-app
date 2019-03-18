import {
  SELECT_VIDEO_CATEGORY
} from "../actions/types";

const initialState = {
  id:    "1",
  value: "1",
  label: "Film & Animation"
};

export const selectedVideoCategory = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_VIDEO_CATEGORY:
      return {
        ...state,
        id:    payload.id,
        value: payload.value,
        label: payload.label
      };
    default:
      return state;
  }
};
