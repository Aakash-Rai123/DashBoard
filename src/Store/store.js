import {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from 'redux-thunk';
import RootReducer from './reducer';

const Store=applyMiddleware(thunk)(createStore)(RootReducer);
export default Store;