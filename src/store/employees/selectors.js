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
        result.has(month)
          ? result.set(month, [...result.get(month), user])
          : result.set(month, [{ ...user }])
      })
    let newMap = new Map(
      [...result.entries()].sort((a, b) => (a[0] > b[0] ? 1 : -1))
    )
    return newMap
  }
)
