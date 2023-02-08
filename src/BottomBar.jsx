import React from 'react'
import { useState } from "react";
import upload from "./upload-icon.svg";
import styled from "styled-components";

export default function TopBar() {

  return (
    <Wrapper>
  </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: 5vh;
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
