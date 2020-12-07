import React, { useEffect } from 'react'
import { ALPHABET } from '../../constants/alphabet'
import { Employee } from '../../components/employee'

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

            />
          ))}
        </div>
      ))}
    </div>
  )
}

export { View }
