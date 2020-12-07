import React from 'react'

const View = (props) => {
  console.log(props, 'EMPLOYEE VIEW')
  return (
      <div className={'employee'} style={{display: 'flex', alignItems: 'center'}}>
        <div className="employee_name">
          {`${props.firstName} ${props.lastName}`}
        </div>
        <input type="checkbox" value={props.lastName} checked={props.checked}/>
      </div>
  )
}
export { View }
