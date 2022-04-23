import React, { Component } from 'react'

export class Person extends Component {
   
  render() {
    const names=["amith","nandan","ajay"]
    const namelist=names.map(name=><h2>{name}</h2>)
    return (
      <div>{namelist}</div>
    )
  }
}

export default Person
