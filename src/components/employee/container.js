import React from 'react'
import { connect } from 'react-redux'
import { View } from './view'
import { compose } from 'redux'
import { onSelectingUsers } from '../../store/employees/actions'
import { getUsersState } from '../../store/employees/selectors'

const mapStateToProps = (state) => {
  return {
    selectedUsers: getUsersState(state).selectedUsers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectingUsers: (ev) => dispatch(onSelectingUsers(ev.target.value)),
  }
}

const Employee = compose(connect(mapStateToProps, mapDispatchToProps))(
  React.memo(View)
)

export { Employee }
