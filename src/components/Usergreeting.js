import React, { Component } from 'react'

 class Usergreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          islogin : false
       }
     }
  render() {
return (
    this.state.islogin?
    <div>welcome mustafa</div> :
    <div>welcome guset</div>
)


      /* let message 
      if(this.state.islogin){
          message=<div>welcome mustafa </div>
      }else{
          message=<div>welcome guset </div>
      }
      return <div>{message}</div> */
      /* if(this.state.islogin){
          return (
              <div><div>welcome mustaf </div></div>
          )
      }else {
        return (
            <div><div>welcome guset </div></div>
        )

      } */
   
  }
}

export default Usergreeting