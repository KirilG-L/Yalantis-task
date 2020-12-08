import React, { useEffect } from 'react'
import { ALPHABET } from '../../constants/alphabet'
import { Employee } from '../../components/employee'
import s from './employees.module.css'
import { MONTHS } from '../../constants/months'

const View = (props) => {
  useEffect(() => {
    props.fetchUsersData()
  }, [])

  const getFiltratedUsers = (letter) =>
    props.users.filter((el) => el.lastName.startsWith(letter))

  return (
    <div className={s['page-employees']}>
      <div className={s['page-employees__alphabet']}>
        <div className={s['title']}>Employees</div>
        <div className={s['alphabet-block']}>
          {ALPHABET.map((letter, idx) => (
            <div key={idx} className={s['letter-block']}>
              <div className={s['letter']}>{letter}</div>
              {getFiltratedUsers(letter).length
                ? getFiltratedUsers(letter).map((el) => (
                    <Employee
                      key={el.id}
                      lastName={el.lastName}
                      firstName={el.firstName}
                      id={el.id}
                    />
                  ))
                : '-'}
            </div>
          ))}
        </div>
      </div>
      <div className={s['page-employees__birthdays']}>
        <div className={s['title']}>Employees birthday</div>
        <div className={s['birthday-block']}>
          {props.selectedUsers.length ? (
            [...props.selectedByMonth.entries()].map(([key, value]) => (
              <div className={s['month-block']} key={key}>
                <div className={s['month']}>{key}</div>
                <ul className={s['persons-block']}>
                  {value.map((el, idx) => {
                    const date = new Date(el.dob)
                    return (
                      <li key={el.lastName} className={s['person-birthday']}>
                        {el.lastName} {el.firstName} - {date.getDate()}{' '}
                        {MONTHS[date.getMonth()]}, {date.getFullYear()} year{' '}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))
          ) : (
            <div>'No selected employees'</div>
          )}
        </div>
      </div>
    </div>
  )
}

export { View }
