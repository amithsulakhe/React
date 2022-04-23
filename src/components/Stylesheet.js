import React from 'react'
import './Mystyle.css'
function Stylesheet(props) {
    let className=props.primary?'primary':''
  return (
    <div><h1 className={className}>StyleSheet</h1></div>
  )
}

export default Stylesheet 