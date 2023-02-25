import { useState } from "react";
import styled from "styled-components";
import FilterArea from "./FilterArea";
import ImageArea from "./ImageArea";
import TopBar from "./TopBar";
import GlobalStyle from "./GlobalStyles";

function App() {
  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [gray, setGray] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [saturation, setSaturation] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [hue, setHue] = useState(0);
  const [image, setImage] = useState(null);
  const [flipHorizontal, setFlipHorizontal] = useState(1);
  const [flipVertical, setFlipVertical] = useState(1);
  const [radius, setRadius] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
      <TopBar setImage={setImage} />
        <FilterArea
          blur={blur}
          setBlur={setBlur}
          setContrast={setContrast}
          setGray={setGray}
          setBrightness={setBrightness}
          setSaturation={setSaturation}
          setSepia={setSepia}
          setHue={setHue}
          setFlipHorizontal={setFlipHorizontal}
          setFlipVertical={setFlipVertical}
          flipHorizontal={flipHorizontal}
          flipVertical={flipVertical}
          setRadius={setRadius}
          setRotate={setRotate}
          rotate={rotate}
        />
              </Container>
        <ImageArea
          image={image}
          setImage={setImage}
          blur={blur}
          setBlur={setBlur}
          contrast={contrast}
          gray={gray}
          brightness={brightness}
          saturation={saturation}
          sepia={sepia}
          hue={hue}
          flipHorizontal={flipHorizontal}
          flipVertical={flipVertical}
          radius={radius}
          rotate={rotate}
        />
    </Wrapper>
  );
}

const Wrapper = styled.div`
height: 100vh;
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #393943;
  color: white;
`;

const Container = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  margin: 0;
  padding: 0;
`;


export default App;
