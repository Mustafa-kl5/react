import React, { Component } from 'react'

 class Eventbind extends Component {

     constructor(props){
         super(props)
         this.state={
             message : 'him mustafa mahmood'
         }
         this.cl=this.cl.bind(this)
     }
     cl(){
        this.setState({
            message : 'goodbye'
        })

     }
  render() {
    return (
       <div>
       <div>{this.state.message}</div> 
       <button onClick={this.cl}> click here</button> 
       </div> 
    )
  }
}

export default Eventbind