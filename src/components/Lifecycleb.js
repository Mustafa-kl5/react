import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'mustafa'
      }
      console.log('life cycle for constructor')
    }
    static getDerivedStateFromProps(props , state){
        console.log('life cycle for getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('life cycle for componentDidMount')
    }
  render() {
    console.log('life cycle for LifecycleB')
    return <div>LifecycleB </div>
    
  }
}

export default LifecycleB