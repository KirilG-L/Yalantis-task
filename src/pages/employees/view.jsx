import React, { useEffect } from 'react'


const View = (props) => {
  console.log(props, 'View')
  useEffect(() => {
    props.fetchUsersData()
  }, [])

  return (
    <div>
      {props.users.length && props.users.map(el => <div key={el.id}>{el.firstName}</div>)}
    </div>
  )
}

export { View }
