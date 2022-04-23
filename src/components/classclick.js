import React, { Component } from 'react'

class classclick extends Component {
    amith(){
        console.log('buttton clicked')
    }
  render() {
    return (
      <div>
          <button onClick={this.amith}>clickme</button>
      </div>
    )
  }
}

export default classclick