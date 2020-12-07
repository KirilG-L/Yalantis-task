import { createSelector } from 'reselect'
import { MONTHS } from '../../constants/months'

export const _getUsersState = (state) => state.employees

export const getUsersStateSelector = createSelector(
  [_getUsersState],
  (employees) => employees.users
)
export const getSelectedUsersStateSelector = createSelector(
  [_getUsersState],
  (employees) => employees.selectedUsers
)
export const getFiltratedByMonthSelectedUsersStateSelector = createSelector(
  [_getUsersState, getSelectedUsersStateSelector],
  (employees, selectedUsers) => {
    let result = new Map()

    employees.users
      .filter((user) => selectedUsers.includes(user.id))
      .map((user) => {
        let month = MONTHS[new Date(user.dob).getMonth()]
        console.log(month)
        result.has(month)
          ? result.set(month, [...result.get(month), user])
          : result.set(month, [{ ...user }])
      })
    return result
  }
)
