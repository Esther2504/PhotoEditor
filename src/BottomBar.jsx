import React from 'react'
import { useState } from "react";
import upload from "./upload-icon.svg";
import styled from "styled-components";

export default function TopBar() {
    const [image, setImage] = useState();

    // console.log(image[0].name)

  return (
    <Wrapper>
    <UploadArea>
    <Input
    type="file"
    accept="image/png, image/jpeg, image/svg"
    onChange={e => setImage(URL.createObjectURL(e.target.files[0].name))}
  />
  <Upload src={upload} />
  </UploadArea>
{image ?
  <img src={image[0].name}></img> :
  null
}


  </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
margin: 0 auto;
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
// border: 1px solid black;
cursor: pointer;
`
