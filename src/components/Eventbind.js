import React, { Component } from 'react'

class Eventbind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "hello amith"
    }
  }
  amith() {
    this.setState({
      message: "Good bye bro"
    })

  }
  render() {
    return (
      <div>{this.state.message}
        <button onClick={() => this.amith()}>Click</button>
      </div>
    )
  }
}

