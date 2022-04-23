import React, { Component } from 'react'

class Comp extends Component {
  render() {
      console.log("component")
    return (
      <div>Component{this.props.name}</div>
    )
  }
}

export default Comp