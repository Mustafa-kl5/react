import React from 'react'

const Greet =(props)=> {
const {name , camp} = props
return (
    <div>
<h1>hi {name } , {camp} </h1>
    
    </div>
)
}
export default Greet