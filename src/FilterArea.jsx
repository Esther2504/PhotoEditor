import React from 'react'
import styled from 'styled-components'

export default function FilterArea() {
  return (
    <Wrapper>
      <input type="range" className='blur' />Blur
      <input type="range" className='contrast' />Contrast
      <input type="range" className='grayscale' />Black & White
      <input type="range" className='brightness' />Brightness
      <input type="range" className='saturation' />Saturation
      <input type="range" className='sepia' />Sepia
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 30%;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 10px;
box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`