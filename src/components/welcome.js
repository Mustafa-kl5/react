import React,{ Component } from "react";

class Welcome extends Component  {
    
    render(){
         const {name , camp} = this.props
         
        return <h1> welcom {name} , {camp}</h1>
    }
}
export default Welcome