import React from "react";
import styled from "styled-components";

export default function ImageArea(props) {
const image = props.image

  return (
    <Wrapper>
<IMG src={image} blur={props.blur} contrast={props.contrast} gray={props.gray} brightness={props.brightness} saturation={props.saturation} sepia={props.sepia} hue={props.hue} flipHorizontal={props.flipHorizontal} flipVertical={props.flipVertical} radius={props.radius} rotate={props.rotate} />
    </Wrapper>
  );
}

// https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-732x549.jpg

const Wrapper = styled.div`
  width: 70%;
  height: 100vh;
  margin: 50px auto;
  background-color: #393943;
  border-radius: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
margin: 0 auto;
max-width: 70%;
// max-height: 90%;
filter: blur(${props => props.blur}px) contrast(${props => props.contrast}%) grayscale(${props => props.gray}%) brightness(${props => props.brightness}) saturate(${props => props.saturation}%) sepia(${props => props.sepia}%) hue-rotate(${props => props.hue}deg);
transform: scaleX(${props => props.flipHorizontal}) scaleY(${props => props.flipVertical}) rotate(${props => props.rotate}deg);
border-radius: ${props => props.radius}%;
`

// grayscale(0%) hue-rotate(0deg) brightness(1) drop-shadow(16px 16px 20px blue) invert(0%) opacity(100%) saturate(0%) sepia(0%)
