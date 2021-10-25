import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import villagersReducer from "./villagers-reducer";
import fishReducer from "./fish-reducer";
import bugsReducer from "./bugs-reducer";
import itemReducer from "./item-reducer";

let reducers = combineReducers({
    villagers: villagersReducer,
    fishes: fishReducer,
    bugs: bugsReducer,
    item: itemReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
