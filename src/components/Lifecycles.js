import React, { Component } from 'react'

export class Lifecycles extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"amith"
      }
      console.log("wlc amith")
    }
    static getDerivedStateFromProps(props,state){
        console.log("wlc ajay")
        return null
    }
    componentDidMount(){
        console.log("wlc mount ")
    }
    shouldComponentUpdate(){
        console.log("updating...")
        return true
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getsnapshotbeforeupdate")
        return null
    }
    componentDidUpdate(){
        console.log("componentdidupdate")
    }
    changestate=()=>{
        this.setState({
            name:"ajay"
        })
    }
  render() {
      console.log("wlc render")
    return (
      <div><h1>Lifecycles</h1>
           <button onClick={this.changestate}>change state</button>
      </div>
     
    )
  }
}

export default Lifecycles