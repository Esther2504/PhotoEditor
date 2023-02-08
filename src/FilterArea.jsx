import React, { useState } from 'react'
import styled from 'styled-components'

export default function FilterArea(props) {

  return (
    <Wrapper>
      <p>Blur</p>
      <input type="range" className='range blur' max='25' onChange={e => props.setBlur(e.target.value)} />
      <span>{props.blur}</span>
      <p>Contrast</p>
      <input type="range" className='range contrast' max='200' onChange={e => props.setContrast(e.target.value)} />
      <p>Black & White</p>
      <input type="range" className='range grayscale' />
      <p>Brightness</p>
      <input type="range" className='range brightness' />
      <p>Saturation</p>
      <input type="range" className='range saturation' />
      <p>Sepia</p>
      <input type="range" className='range sepia' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 30%;
height: 90vh;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 10px;
box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

.range {
  width: 60%;
}
`