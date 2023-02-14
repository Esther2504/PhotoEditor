import React, { useState } from 'react'
import styled from 'styled-components'

export default function FilterArea(props) {

  return (
    <Wrapper>
      <p>Blur</p>
      <RangeContainer>
      <input type="range" className='range blur' max='25' onChange={e => props.setBlur(e.target.value)} />
      <button onClick={e => props.setBlur(0)}>Reset</button>
      </RangeContainer>
      <p>Contrast</p>
      <RangeContainer>
      <input type="range" className='range contrast' min='100' max='500' onChange={e => props.setContrast(e.target.value)} />
      <button onClick={e => props.setContrast(100)}>Reset</button>
      </RangeContainer>
      <p>Black & White</p>
      <RangeContainer>
      <input type="range" className='range grayscale' min='0' max='100' onChange={e => props.setGray(e.target.value)} />
      <button onClick={e => props.setGray(0)}>Reset</button>
      </RangeContainer>
      <p>Brightness</p>
      <RangeContainer>
      <input type="range" className='range brightness' min='1' max='10' onChange={e => props.setBrightness(e.target.value)} />
      <button onClick={e => props.setBrightness(1)}>Reset</button>
      </RangeContainer>
      <p>Saturation</p>
      <RangeContainer>
      <input type="range" className='range saturation' min='100' max='300' onChange={e => props.setSaturation(e.target.value)} />
      <button onClick={e => props.setSaturation(100)}>Reset</button>
      </RangeContainer>
      <p>Sepia</p>
      <RangeContainer>
      <input type="range" className='range sepia' min='0' max='100' onChange={e => props.setSepia(e.target.value)} />
      <button onClick={e => props.setSepia(0)}>Reset</button>
      </RangeContainer>
      <p>Hue</p>
      <RangeContainer>
      <input type="range" className='range hue' min='0' max='300' onChange={e => props.setHue(e.target.value)} />
      <button onClick={e => props.setHue(0)}>Reset</button>
      </RangeContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
background-color: #393943;
box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
justify-content: center;
align-items: center;
border-right: 1px solid white;

.range {
  width: 250px;
}

button {
background-color: white;
border-radius: 5px;
width: 50px;
height: 30px;
cursor: pointer;
}
`

const RangeContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
`