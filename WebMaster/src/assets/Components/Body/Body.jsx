import React from 'react'
import './Body.css'

function Body(props) {
  return (
    <div className="bodycontent">
        <h3>Body Content</h3>
        {props.children}
    </div>
  )
}

export default Body