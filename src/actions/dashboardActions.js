import * as types from './actionTypes';
import { httpClient } from '../utils';
import { showLoading, hideLoading } from './commonActions';

export function getOrders() {
    return dispatch => {
        dispatch(getOrdersPending());
        dispatch(showLoading());
        httpClient.get('5df64b99340000223de5a57a').then(response => {
            return new Promise((res, rej) => {
                if(response){
                    res('sucess');
                    dispatch(hideLoading());
                    dispatch(getOrdersSuccess(response.result));
                }else{
                    rej('error');
                }
            })
        });
    };
}
function getOrdersPending() {
    return {
        type: types.GET_DASHBOARD_ORDERS_REQUEST,
    };
}

function getOrdersSuccess(orders) {
    return {
        type: types.GET_DASHBOARD_ORDERS_SUCCESS,
        payload: orders,
    };
}
