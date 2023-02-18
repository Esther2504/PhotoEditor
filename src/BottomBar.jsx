import React from 'react'
import { useState } from "react";
import upload from "./upload-icon.svg";
import styled from "styled-components";
import { saveAs } from 'file-saver';

export default function BottomBar({image}) {
  const downloadImage = () => {
    // saveAs(image, 'image.png')
  }

  return (
    <Wrapper>
      <button onClick={downloadImage()}>Download</button>
  </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: 5vh;
box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
margin: 0 auto;
background-color: #393943;
border-top: 1px solid white;
`
