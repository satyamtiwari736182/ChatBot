import React from 'react'

const Message = ({types,user,msg}) => {
  return (
    <div className={types}>
            <h4>{user}</h4>
            <p>{msg}</p>
          </div>
  )
}

export default Message