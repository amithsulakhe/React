import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:'parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(childname){
        alert(`hello ${this.state.parentname} from ${childname}`)
    }
  render() {
    return (
      <div>
          <Childcomponent greethandler={this.greetparent}></Childcomponent>
      </div>
    )
  }
}

export default Parentcomponent