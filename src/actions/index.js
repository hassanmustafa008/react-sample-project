import * as actionType from './ActionType';
import axios from "axios";

export const addCounter = () => ({
    type: actionType.ADD_COUNTER,
    payload: 1
});

export const removeCounter = () => ({
    type: actionType.REMOVE_COUNTER,
    payload: 1
});

export const addArticle = (payload) => {
    return {
        type: actionType.ADD_ARTICLE,
        payload
    };
};

export function getData() {
    return function (dispatch) {
        return axios.get(`http://localhost:3002/articles`)
            .then(response => {
                dispatch({type: "DATA_LOADED", payload: response.data});
            });
    }
}

export function postData(data) {
    return function (dispatch) {
        return axios.post(`http://localhost:3002/addArticle`, data)
            .then(response => {
                dispatch({type: "DATA_POSTED", payload: data});
            });
    }
}