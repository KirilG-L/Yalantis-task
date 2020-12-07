import { getUsersState } from '../../store/employees/selectors'
import { connect } from 'react-redux'
import { View } from './view'
import { fetchUsersData } from '../../store/employees/actions'
import * as React from 'react'

const mapStateToProps = (state) => {
  return {
    users: getUsersState(state).users,
    selectedUsers: getUsersState(state).selectedUsers,
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
