import React from 'react'
import s from './employee.module.css'

const View = (props) => {
  return (
    <div
      className={s['employee']}
    >
      <div className={s['employee_name']}>
        {`${props.firstName} ${props.lastName}`}
      </div>
      <input
        className={s['employee_input']}
        type='checkbox'
        value={props.id}
        onChange={props.onSelectingUsers}
        checked={props.selectedUsers.includes(props.id)}
      />
    </div>
  )
}
export { View }
