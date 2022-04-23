import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin:true
      }
    }
  render() {
      return this.state.isloggedin?(
          <div>logged in</div>
      ):(
          <div>logged out</div>
      )
    //   let message
    //   if(this.state.isloggedin){
    //       message=<div>Logged in</div>
    //   }
    //   else{
    //     message=<div>Logged out</div>
    //   }
    //   return <div>{message}</div>
    // if(this.state.isloggedin){
    //     return <div>Logged in</div>
    // }
    // else{
    //     return <div>Logged out</div>
    // }

  }
}

export default Usergreeting