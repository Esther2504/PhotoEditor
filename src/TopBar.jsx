import React from 'react'
import { useState } from "react";
import upload from "./images/upload-icon.svg";
import cross from "./images/cross.svg"
import styled from "styled-components";

export default function TopBar(props) {
  

  return (
    <Wrapper>
          <Remove src={cross} onClick={(e) => props.setImage(null)} />
    <UploadArea>
    <Input
    type="file"
    accept="image/png, image/jpeg, image/svg"
    onChange={(event) => {
      props.setImage(URL.createObjectURL(event.target.files[0]));
    }}
  />
  <Upload src={upload} />
  </UploadArea>
  </Wrapper>
  )
}

const Wrapper = styled.div`
width: 600px;
height: 5vh;
box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
// margin: 0 auto;
background-color: #393943;
border-bottom: 1px solid white;
padding: 5px;
display: flex;
// justify-content: flex-end;
`

const Input = styled.input`
  opacity: 0;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
`;

const Upload = styled.img`
width: 40px;
`
const UploadArea = styled.div`
width: 40px;
cursor: pointer;
`
const Remove = styled.img`
width: 40px;
cursor: pointer;
`