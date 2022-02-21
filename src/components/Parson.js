import React from 'react'
import Namelist from './Namelist'

function Parson({parson}) {
  return (
    <div><h2>{parson.id} ,{parson.namme} ,{parson.age},{parson.skills}</h2></div>
  )
}

export default Parson