import React, { Component } from 'react'
import Chiledco from './chiledco'
 class Parentco extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          parentname : 'parent'
       }
       this.print=this.print.bind(this)
     }

     print(chiledname){
         alert(`hello ${this.state.parentname} from ${chiledname}`)
     }
  render() {
    return (
      <div> <Chiledco print={this.print} /></div>
    )
  }
}

export default Parentco