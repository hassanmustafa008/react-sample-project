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

// articles
export const addArticle = (payload) => {
    return {
        type: actionType.ADD_ARTICLE_LOCAL,
        payload
    };
};

export function getData() {
    return function (dispatch) {
        return axios.get(`http://localhost:3002/articles`)
            .then(response => {
                dispatch({type: "GET_ARTICLES", payload: response.data});
            });
    }
}

export function postData(data) {
    return function (dispatch) {
        return axios.post(`http://localhost:3002/addArticle`, data)
            .then(response => {
                dispatch({type: "ADD_ARTICLES_REMOTE", payload: data});
            });
    }
}

export function editData(data) {
    return function (dispatch) {
        return axios.post(`http://localhost:3002/editArticle`, data)
            .then(response => {
                dispatch({type: "EDIT_ARTICLE", payload: data});
            });
    }
}

export function deleteData(data) {
    return function (dispatch) {
        return axios.delete(`http://localhost:3002/deleteArticle`, data)
            .then(response => {
                dispatch({type: "DELETE_ARTICLE", payload: data});
            });
    }
}