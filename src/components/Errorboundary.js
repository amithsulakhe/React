import React, { Component } from 'react'

export class Errorboundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         haserror:false
      }
    }
     static getDerivedStateFromError(error){
    return {
    haserror: true
    }
}
    
  render() {
      if(this.state.haserror){
        return (
            <h1>Something went wrong</h1>
          )
      }
      return  
   
  }
}

export default Errorboundary