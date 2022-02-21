import React from 'react'
import './mystyle.css'

function Style(props) {
  let className=props.all ? 'all' : '' 
  return (
    <div className={`${className} font`}>Styleseets</div>
  )
}

export default Style