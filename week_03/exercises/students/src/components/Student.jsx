import React from 'react'

export default function Student({student}) {
  return (
    <div>
        <h3>{student.firstName} {student.lastName}</h3>
        <img src={student.picture.thumbnail} alt="profile" />
    </div>
  )
}
