import { API_STATUS_SUCCESS, API_STATUS_ERROR, API_STATUS_IN_PROGRESS  } from '../actions/types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case API_STATUS_ERROR:
       return { ...state, loading: false };
    case API_STATUS_IN_PROGRESS:
       return { ...state, loading: true };
    case API_STATUS_SUCCESS:
       return { ...state, json: action.json, loading: false };
    default:
       return state;
  }
};
export default reducer;