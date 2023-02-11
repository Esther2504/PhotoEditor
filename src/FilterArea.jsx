import React, { useState } from 'react'
import styled from 'styled-components'

export default function FilterArea(props) {

  return (
    <Wrapper>
      <p>Blur</p>
      <input type="range" className='range blur' max='25' onChange={e => props.setBlur(e.target.value)} />
      <button onClick={e => props.setBlur(0)}>Reset</button>
      <p>Contrast</p>
      <input type="range" className='range contrast' min='100' max='500' onChange={e => props.setContrast(e.target.value)} />
      <button onClick={e => props.setContrast(100)}>Reset</button>
      <p>Black & White</p>
      <input type="range" className='range grayscale' min='0' max='100' onChange={e => props.setGray(e.target.value)} />
      <button onClick={e => props.setGray(0)}>Reset</button>
      <p>Brightness</p>
      <input type="range" className='range brightness' min='0' max='10' onChange={e => props.setBrightness(e.target.value)} />
      <button onClick={e => props.setBrightness(1)}>Reset</button>
      <p>Saturation</p>
      <input type="range" className='range saturation' min='100' max='300' onChange={e => props.setSaturation(e.target.value)} />
      <button onClick={e => props.setSaturation(100)}>Reset</button>
      <p>Sepia</p>
      <input type="range" className='range sepia' min='0' max='100' onChange={e => props.setSepia(e.target.value)} />
      <button onClick={e => props.setSepia(0)}>Reset</button>
      <p>Hue</p>
      <input type="range" className='range hue' min='0' max='300' onChange={e => props.setHue(e.target.value)} />
      <button onClick={e => props.setHue(0)}>Reset</button>
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