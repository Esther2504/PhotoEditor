import React, { useState } from 'react'
import styled from 'styled-components'
import rotateleft from './rotate-left.svg'
import rotateright from './rotate-right.svg'
import fliphorizontal from './flip-horizontal.svg'
import flipvertical from './flip-vertical.svg'

export default function FilterArea(props) {
console.log(props.sepia)
  return (
    <Wrapper>
      <RangeContainer>
      <p>Blur</p>
      <input type="range" className='range blur' min='0' max='25' defaultValue='0' onChange={e => props.setBlur(e.target.value)} />
      <button onClick={e => props.setBlur(0)}>Reset</button>
      </RangeContainer>
     
      <RangeContainer>
      <p>Contrast</p>
      <input type="range" className='range contrast' min='100' max='500' defaultValue='100' onChange={e => props.setContrast(e.target.value)} />
      <button onClick={e => props.setContrast(100)}>Reset</button>
      </RangeContainer>
      
      <RangeContainer>
      <p>Black & White</p>
      <input type="range" className='range grayscale' min='0' max='100' defaultValue='0' onChange={e => props.setGray(e.target.value)} />
      <button onClick={e => props.setGray(0)}>Reset</button>
      </RangeContainer>
      
      <RangeContainer>
      <p>Brightness</p>
      <input type="range" className='range brightness' min='1' max='10' defaultValue='1' onChange={e => props.setBrightness(e.target.value)} />
      <button onClick={e => props.setBrightness(1)}>Reset</button>
      </RangeContainer>
      
      <RangeContainer>
      <p>Saturation</p>
      <input type="range" className='range saturation' min='100' max='300' defaultValue='100' onChange={e => props.setSaturation(e.target.value)} />
      <button onClick={e => props.setSaturation(100)}>Reset</button>
      </RangeContainer>
      
      <RangeContainer>
      <p>Sepia</p>
      <input type="range" className='range sepia' min='0' max='100' defaultValue='0' onChange={e => props.setSepia(e.target.value)} />
      <button onClick={e => props.setSepia(0)}>Reset</button>
      </RangeContainer>
      <RangeContainer>
      <p>Hue</p>
      <input type="range" className='range hue' min='0' max='300' defaultValue='0' onChange={e => props.setHue(e.target.value)} />
      <button onClick={e => props.setHue(0)}>Reset</button>
      </RangeContainer>
      <RangeContainer>
      <p>Rounding Border</p>
      <input type="range" className='range radius' min='0' max='60' defaultValue='0' onChange={e => props.setRadius(e.target.value)} />
      <button onClick={e => props.setRadius(0)}>Reset</button>
      </RangeContainer>
      <ButtonContainer>
      <Button onClick={e => props.setFlipHorizontal((props.flipHorizontal == 1) ? -1 : 1)}><img src={fliphorizontal} /></Button>
      <Button onClick={e => props.setFlipVertical((props.flipVertical == 1) ? -1 : 1)}><img src={flipvertical} /></Button>
      </ButtonContainer>
      <ButtonContainer>
      <Button onClick={e => props.setRotate(props.rotate - 90)}><img src={rotateleft} /></Button>
      <Button onClick={e => props.setRotate(props.rotate + 90)}><img src={rotateright} /></Button>
      </ButtonContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 30%;
height: 100vh;
display: flex;
flex-direction: column;
background-color: #393943;
box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
align-items: center;
border-right: 1px solid white;

.range {
  width: 250px;
}



.range {
  -webkit-appearance: none;
  height: 10px;
  background: white;
  outline: none;
  border-radius: 15px;
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background: #927E95;
  cursor: pointer;
}

.range::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background: #927E95;
  cursor: pointer;
}
`

const RangeContainer = styled.div`
width: 90%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
justify-items: center;
text-align: center;
grid-gap: 10px;

button {
  width: 70px;
  height: 30px;
  background-color:#927E95;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 1rem;
}
`

const Button = styled.button`
width: 70px;
height: 50px;
background-color:#927E95;
border-radius: 5px;
cursor: pointer;
border: none;
color: white;
font-size: 1rem;

img {
  width: 20px;
}
`

const ButtonContainer = styled.div`
width: 150px;
height: 60px;
display: flex;
justify-content: space-between;
`