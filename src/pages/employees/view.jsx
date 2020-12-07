import React, { useEffect } from 'react'
import { ALPHABET } from '../../constants/alphabet'
import { Employee } from '../../components/employee'
import { MONTHS } from '../../constants/months'

const View = (props) => {
  console.log(props, 'View')
  useEffect(() => {
    props.fetchUsersData()
  }, [])

  const getFiltratedUsers = (letter) => {
    let result = props.users.filter((el) => el.lastName.startsWith(letter))

    return result
  }

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {ALPHABET.map((letter, idx) => (
        <div key={idx}>
          <div style={{display: 'flex' }}>{letter}</div>
          {getFiltratedUsers(letter).map((el) => (
            <Employee
              key={el.id}
              lastName={el.lastName}
              firstName={el.firstName}
              id={el.id}
            />
          ))}
        </div>
      ))}
      <div className="employees-birthdays">
        {MONTHS.map((month, idx) => <div key={idx}>
          <div className="month">{month}</div>
          {props.users.map( user => {
            const date = new Date(user.dob);
            return props.selectedUsers.includes(user.id) && date.getMonth() === idx
                ? `${user.lastName} ${user.firstName} - ${date.toLocaleString("en-US", { month: 'long', year: 'numeric'})} year`
                : null
            }
          )
          }
        </div>)
        }
      </div>
    </div>
  )
}

export { View }
