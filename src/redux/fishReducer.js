import {fishAPI} from "../api/api";

let initialState = {
  fishes: [],
};

const fishReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FISHES': {
      return {...state, fishes: action.fishes}
    }
    default:
      return state;
  }
}

export const setFishes = (fishes) => ({type: 'SET_FISHES', fishes})

export const getFishes = () => async (dispatch) => {
  const data = await fishAPI.getFishes();
  dispatch(setFishes(data));
}

export default fishReducer;
