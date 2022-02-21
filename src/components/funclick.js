import React from 'react'


function  Funclick() {

    function clickHandler(){
       console.log("hi mustafa ") 
    }
  return (
    <div>
    <button onClick={clickHandler}> click </button>    
     </div>
  )
}
 
export default Funclick
