import React from "react";
import styled from "styled-components";
import upload from "./upload-icon.svg";

export default function ImageArea(props) {
const image = props.image

  return (
    <Wrapper>
      {image ?
<IMG src={image} blur={props.blur} contrast={props.contrast} gray={props.gray} brightness={props.brightness} saturation={props.saturation} sepia={props.sepia} hue={props.hue} flipHorizontal={props.flipHorizontal} flipVertical={props.flipVertical} radius={props.radius} rotate={props.rotate} />
      :  
<UploadArea>
      <Input
      type="file"
      accept="image/png, image/jpeg, image/svg"
      onChange={(event) => {
        props.setImage(URL.createObjectURL(event.target.files[0]));
      }}
    />
    <Upload src={upload} />
    <p>Upload image</p>
    </UploadArea>
    }
   </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  background-color: #393943;
  // box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const IMG = styled.img`
margin: 0 auto;
max-width: 90%;
filter: blur(${props => props.blur}px) contrast(${props => props.contrast}%) grayscale(${props => props.gray}%) brightness(${props => props.brightness}) saturate(${props => props.saturation}%) sepia(${props => props.sepia}%) hue-rotate(${props => props.hue}deg);
transform: scaleX(${props => props.flipHorizontal}) scaleY(${props => props.flipVertical}) rotate(${props => props.rotate}deg);
border-radius: ${props => props.radius}%;
`
const Input = styled.input`
  opacity: 0;
  width: 60px;
  height: 40px;
  position: absolute;
  cursor: pointer;
`

const Upload = styled.img`
width: 60px;
`
const UploadArea = styled.div`
text-align: center;
cursor: pointer;
`
// grayscale(0%) hue-rotate(0deg) brightness(1) drop-shadow(16px 16px 20px blue) invert(0%) opacity(100%) saturate(0%) sepia(0%)
