import React from 'react'

export default function FlipImages(props) {
  return (
    <div>
       <button onClick={props.setFlipHorizontal(-1)}>flip</button>


    </div>
  )
}
