import {villagersAPI} from "../api/api";

let initialState = {
  villagers: [],
};

const villagersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VILLAGERS': {
      return {...state, villagers: action.villagers}
    }
    default:
      return state;
  }
}

export const setVillagers = (villagers) => ({type: 'SET_VILLAGERS', villagers})

export const getVillagers = () => async (dispatch) => {
  const data = await villagersAPI.getVillagers();
  dispatch(setVillagers(data));
}

export default villagersReducer;
