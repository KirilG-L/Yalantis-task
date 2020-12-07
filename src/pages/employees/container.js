import {
  getFiltratedByMonthSelectedUsersStateSelector,
  getSelectedUsersStateSelector,
  getUsersStateSelector,
} from '../../store/employees/selectors'
import { connect } from 'react-redux'
import { View } from './view'
import { fetchUsersData } from '../../store/employees/actions'
import React from 'react'

const mapStateToProps = (state) => {
  return {
    users: getUsersStateSelector(state),
    selectedUsers: getSelectedUsersStateSelector(state),
    selectedByMonth: getFiltratedByMonthSelectedUsersStateSelector(state),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersData: () => dispatch(fetchUsersData()),
  }
}

const PageEmployees = connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(View))

export { PageEmployees }
