import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import upload from "./upload-icon.svg";

export default function ImageArea() {
    const [image, setImage] = useState()

  return (
    <Wrapper>
    <Input type="file" accept="image/png, image/jpeg, image/svg" onInput={setImage} />
    <img src={upload} />
       </Wrapper>
  )
}

const Wrapper = styled.div`
width: 800px;
height: 500px;
margin: 50px auto;
background-color: white;
border-radius: 10px;
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`

const Input = styled.input`
// opacity: 0;
`