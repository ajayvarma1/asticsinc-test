import Axios from "axios";
import Setting from '../settings';
const apiUrl = Setting.apiUrl;

export const ADD_USER = "ADD_USER";
export const GET_USER = "GET_USER";
export const DEL_USER = "DEL_USER";

function addUserDetails(post) {
  return dispatch => {
  
    return fetch(apiUrl + "posts", {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => dispatch(requestaddUser(json))).
      catch(err => dispatch(requestaddUser([])))
  };
}

function requestaddUser(response) {
  return {
    type: ADD_USER,
    add_user: response
  };
}

export function addUser(post) {
  return dispatch => {
    return dispatch(addUserDetails(post));
  };
}



function getUserDeatils(post) {
  return dispatch => {
  
    return fetch(apiUrl + "posts", {
      method: 'GET',
     
    })
      .then(response => response.json())
      .then(json => dispatch(requestUserList(json))).
      catch(err => dispatch(requestUserList([])))
  };
}

function requestUserList(response) {
  return {
    type: GET_USER,
    get_user: response
  };
}

export function getUserList(post) {
  return dispatch => {
    return dispatch(getUserDeatils(post));
  };
}



function delUser(id) {
  return dispatch => {
  
    return fetch(apiUrl + "posts/"+id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => dispatch(requestUserDelete(json))).
      catch(err => dispatch(requestUserDelete([])))
  };
}

function requestUserDelete(response) {
  return {
    type: DEL_USER,
    del_user: response
  };
}

export function deleteUser(id) {
  return dispatch => {
    return dispatch(delUser(id));
  };
}