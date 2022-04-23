import React from 'react'

function Functionclick() {
    function clicks(){
        console.log('button clicks')
    }
  return (
    <div>
        <button onClick={clicks}>Click me</button>
    </div>
  )
}

export default Functionclick