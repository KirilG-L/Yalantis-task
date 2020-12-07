import { createAction } from '../utils'
import axios from 'axios'
import { URL } from '../../constants/api'
import {
  SET_SELECTED_USERS,
  SET_USERS_START,
  SET_USERS_SUCCESS,
} from '../../constants/action-types'

const ActionTypes = {
  getUsersData: createAction(SET_USERS_START),
  setUsersData: createAction(SET_USERS_SUCCESS),
  setSelectedUsers: createAction(SET_SELECTED_USERS),
}

export const fetchUsersData = () => (dispatch, getState) => {
  dispatch(ActionTypes.getUsersData())
  axios
    .get(URL)
    .then((response) => response.data)
    .then((response) => dispatch(ActionTypes.setUsersData(response)))
    .catch((error) => console.log(error))
}

export const onSelectingUsers = (uid) => (dispatch, action) => {
  dispatch(ActionTypes.setSelectedUsers(uid))
}
