import React from "react";
import styled from "styled-components";
import rotateleft from "./images/rotate-left.svg";
import rotateright from "./images/rotate-right.svg";
import fliphorizontal from "./images/flip-horizontal.svg";
import flipvertical from "./images/flip-vertical.svg";

export default function FilterArea(props) {
  return (
    <Wrapper>
      <RangeContainer>
        <P>Blur</P>
        <Range
          type="range"
          className="range blur"
          min="0"
          max="25"
          defaultValue="0"
          onChange={(e) => props.setBlur(e.target.value)}
        />
        <ResetButton onClick={(e) => props.setBlur(0)}>Reset</ResetButton>
      </RangeContainer>

      <RangeContainer>
        <P>Contrast</P>
        <Range
          type="range"
          className="range contrast"
          min="100"
          max="500"
          defaultValue="100"
          onChange={(e) => props.setContrast(e.target.value)}
        />
        <ResetButton onClick={(e) => props.setContrast(100)}>Reset</ResetButton>
      </RangeContainer>

      <RangeContainer>
        <P>Black & White</P>
        <Range
          type="range"
          className="range grayscale"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => props.setGray(e.target.value)}
        />
        <ResetButton onClick={(e) => props.setGray(0)}>Reset</ResetButton>
      </RangeContainer>

      <RangeContainer>
        <P>Brightness</P>
        <Range
          type="range"
          className="range brightness"
          min="1"
          max="10"
          defaultValue="1"
          onChange={(e) => props.setBrightness(e.target.value)}
        />
        <ResetButton onClick={(e) => props.setBrightness(1)}>Reset</ResetButton>
      </RangeContainer>

      <RangeContainer>
        <P>Saturation</P>
        <Range
          type="range"
          className="range saturation"
          min="100"
          max="300"
          defaultValue="100"
          onChange={(e) => props.setSaturation(e.target.value)}
        />
        <ResetButton onClick={(e) => props.setSaturation(100)}>
          Reset
        </ResetButton>
      </RangeContainer>

      <RangeContainer>
        <P>Sepia</P>
        <Range
          type="range"
          className="range sepia"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => props.setSepia(e.target.value)}
        />
        <ResetButton onClick={(e) => props.setSepia(0)}>Reset</ResetButton>
      </RangeContainer>

      <RangeContainer>
        <P>Hue</P>
        <Range
          type="range"
          className="range hue"
          min="0"
          max="300"
          defaultValue="0"
          onChange={(e) => props.setHue(e.target.value)}
        />
        <ResetButton onClick={(e) => props.setHue(0)}>Reset</ResetButton>
      </RangeContainer>

      <RangeContainer>
        <P>Rounded Border</P>
        <Range
          type="range"
          className="range radius"
          min="0"
          max="60"
          defaultValue="0"
          onChange={(e) => props.setRadius(e.target.value)}
        />
        <ResetButton onClick={(e) => props.setRadius(0)}>Reset</ResetButton>
      </RangeContainer>

      <ButtonContainer>
        <Button
          onClick={(e) =>
            props.setFlipHorizontal(props.flipHorizontal == 1 ? -1 : 1)
          }
        >
          <IMG src={flipvertical} />
        </Button>
        <Button
          onClick={(e) =>
            props.setFlipVertical(props.flipVertical == 1 ? -1 : 1)
          }
        >
          <IMG src={fliphorizontal} />
        </Button>
        <Button onClick={(e) => props.setRotate(props.rotate - 90)}>
          <IMG src={rotateleft} />
        </Button>
        <Button onClick={(e) => props.setRotate(props.rotate + 90)}>
          <IMG src={rotateright} />
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 50px auto;
  width: 600px;
  height: 900px;
  display: flex;
  flex-direction: column;
  background-color: #393943;
  align-items: center;
`;

const P = styled.p``;

const RangeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-gap: 10px;
`;

const Range = styled.input`
  width: 250px;
  -webkit-appearance: none;
  height: 10px;
  background: white;
  outline: none;
  border-radius: 15px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background: #927e95;
    cursor: pointer;
  }
`;

const ResetButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: #927e95;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  width: 350px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 25px;
  background-color: #927e95;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 1rem;
`;

const IMG = styled.img`
  width: 20px;
`;