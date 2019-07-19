import {createAction} from 'redux-actions';
import * as ActionType from './ActionType';

export const setCredentials= createAction(ActionType.GET_CREDENTIALS);
export const setDashboardInfo= createAction(ActionType.GET_DASHBOARDINFO);