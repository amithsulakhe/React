import React, { Component } from 'react'
import Purecomp from './Purecomp'
import Comp from './Comp'
import Memocomp from './Memcomp'

class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"amith"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"nandan"
            })
        },2000)
    }
  render() {
      console.log("Parentcomponent")
    return (
      <div>Parentcomp
           {/* <Purecomp name={this.state.name} ></Purecomp>
          <Comp name={this.state.name}></Comp> */}
          <Memocomp name={this.state.name}></Memocomp>
      </div>
    )
  }
}

export default Parentcomp