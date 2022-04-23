import React, { Component } from 'react'

class Count extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1
      }
      ,
       () => {
        console.log(this.state.count)
  })
  // this.state.count = this.state.count + 1
  // console.log(this.state.count)
}
render() {
  return (
    <div>
      <div>Count-{this.state.count}</div>
      <button onClick={() => this.increment()}>increment</button>
    </div>
  )
}
}

export default Count 