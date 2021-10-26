import {bugsAPI} from "../api/api";

let initialState = {
  bugs: [],
};

const bugsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BUGS': {
      return {...state, bugs: action.bugs}
    }
    default:
      return state;
  }
}

export const setBugs = (bugs) => ({type: 'SET_BUGS', bugs})

export const getBugs = () => async (dispatch) => {
  const data = await bugsAPI.getBugs();
  dispatch(setBugs(data));
}

export default bugsReducer;
