import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
      this.cbref=null
      this.setcbref=element=>{
          this.cbref=element
      }
    }
    componentDidMount(){
        if(this.cbref){
            this.cbref.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickhandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef} />
          <input type="text" ref={this.setcbref} />
          <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo