import React from "react";
import styled from "styled-components";

export default function ImageArea(props) {

  return (
    <Wrapper>
<IMG src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-732x549.jpg" blur={props.blur} contrast={props.contrast} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70%;
  height: 90vh;
  // margin: 50px auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
${props => console.log(props.contrast)}
margin: 0 auto;
max-width: 90%;
max-height: 90%;
filter: blur(${props => props.blur}px) contrast(${props => props.contrast}%) grayscale(0%) hue-rotate(0deg) brightness(1) drop-shadow(16px 16px 20px blue) invert(0%) opacity(100%) saturate(0%) sepia(0%);
`

