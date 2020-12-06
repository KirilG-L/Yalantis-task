import { createAction } from '../utils'
import axios from 'axios'
import { URL } from '../../constants/api'

const ActionTypes = {
  getUsersData: createAction('SET_USERS START'),
  setUsersData: createAction('SET_USERS SUCCESS'),
}

export const fetchUsersData = () => (dispatch, getState) => {
  dispatch(ActionTypes.getUsersData())
  axios
    .get(URL)
    .then((response) => response.data)
    .then((response) => dispatch(ActionTypes.setUsersData(response)))
    .catch((error) => console.log(error))
}
