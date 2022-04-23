import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
      super(props)
        this.inputref=React.createRef()
    }
    focusinput(){
        this.inputref.current.focus()
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.inputref} />
      </div>
    )
  }
}

export default Input