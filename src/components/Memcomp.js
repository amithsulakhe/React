import React from 'react'

function Memocomp({name}) {
    console.log("memo")
  return (
    <div>{name}</div>
  )
}

export default React.memo(Memocomp)