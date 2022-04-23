import React, { Component } from 'react'

export class form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            message:''
        }
      }
      handlermessage =event=>{
          this.setState({
              message:event.target.value
          })
      }
      nandan = () =>{
        alert(`${this.state.message}`)
      }
  render() {
   
    return (
      <form onSubmit={this.nandan}>
          <label>Firstname</label>
          <input type="text" value={this.state.message} onChange={this.handlermessage}/><br></br>

          <button type='submit' >Submit</button>
      </form>
    )
  }
}

export default form