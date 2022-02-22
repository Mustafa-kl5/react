import React, { Component } from 'react'
import LifecycleB from './Lifecycleb'

export class Lifecycle extends Component {
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
    console.log('life cycle for LifecycleA')
    return (<div>
        <div>LifecycleA </div>
        <LifecycleB />
    </div>)
    
  }
}

export default Lifecycle