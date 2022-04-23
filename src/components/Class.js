import React, { Component } from 'react'

class Class extends Component {
  render(props) {
    return (
      <div>
          <h1>this is Class {this.props.name}</h1>
      </div>
    )
  }
}

export default Class
// or

// export default Class
// import React, { Component } from 'react'

// class Class extends Component {
//   render() {
//     const {name}=this.props
//     return (
//       <div>
//           <h1>this is Class {name}</h1>
//       </div>
//     )
//   }
// }

// export default Class