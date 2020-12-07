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
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {ALPHABET.map((letter, idx) => (
          <div key={idx}>
            <div style={{ display: 'flex' }}>{letter}</div>
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
      </div>
      <div className='employees-birthdays'>
        {[...props.selectedByMonth.entries()].map(([ key, value ]) => <>
            <div>{key}</div>
            {value.map(el => <div>{el.firstName}</div>)}
          </>
          )
        }
      </div>
    </div>
  )
}

export { View }
