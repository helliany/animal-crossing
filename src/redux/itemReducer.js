import {itemAPI} from "../api/api";

let initialState = {
  item: {},
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM': {
      return {...state, item: action.item}
    }
    default:
      return state;
  }
}

export const setItem = (item) => ({type: 'SET_ITEM', item})

export const getItem = (url) => async (dispatch) => {
  const data = await itemAPI.getItem(url);
  dispatch(setItem(data));
}

export default itemReducer;
