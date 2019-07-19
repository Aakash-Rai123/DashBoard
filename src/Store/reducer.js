import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from './action';
import * as LoginCredentials from '../LoginCredentials';
import * as UserInfo from '../UserInfo';

export default combineReducers({
    getCredentials:handleActions({
        [actions.setCredentials]:(state,action)=>{
            return action.payload
        }
    },LoginCredentials.loginCredentials),
    getUserInfo: handleActions({
        [actions.setDashboardInfo]:(state,action)=>{
            return action.payload
        }
    },UserInfo.userInfo)
})