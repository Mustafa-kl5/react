import React, { Component } from 'react'

 class Count extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count : 0
       }
     }
     counter1(){
        
        this.setState((prevState ,props)=>({
            count : prevState.count +1
        }))
        
    }
    counter5(){
        this.counter1()
        this.counter1()
        this.counter1()
        this.counter1()
        this.counter1()

    }
  render() {
    return (
    <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>this.counter5()}>increes</button>
    </div>
      
    )
  }
}

export default Count