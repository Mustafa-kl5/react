import React, { Component } from 'react'

class Classclick extends Component {
   
     cl(){
        console.log("hi mustaf")
    }
  render() {
    return (
        <button onClick={this.cl}> click </button>  
    )
  }
}
export default Classclick