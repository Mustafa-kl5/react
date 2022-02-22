import React, { Component } from 'react'
import Purecom from './Purecom'
import RedCONP from './RedCONP'

 class Parent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name : 'mustafa'
       }
     }
     componentDidMount(){
         setInterval(()=>{
             this.setState({
                 name : 'mustafa'
             })
         },2000)
     }
  render() {
    return (
      <div>Parent component
          <RedCONP name={this.state.name}></RedCONP> 
          <Purecom name={this.state.name}></Purecom>

      </div>
    )
  }
}

export default Parent