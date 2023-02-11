import { useState } from "react";
import styled from "styled-components";
import FilterArea from "./FilterArea";
import ImageArea from "./ImageArea";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import upload from "./upload-icon.svg";

function App() {
  const [blur, setBlur] = useState(0)
  const [contrast, setContrast] = useState(100)
  const [gray, setGray] = useState(0)
  const [brightness, setBrightness] = useState(1)
  const [saturation, setSaturation] = useState(100)
  const [sepia, setSepia] = useState(0)
  const [hue, setHue] = useState(0)


  return (
<Wrapper>
<TopBar />
<Container>
<FilterArea blur={blur} setBlur={setBlur} setContrast={setContrast} setGray={setGray} setBrightness={setBrightness} setSaturation={setSaturation} setSepia={setSepia} setHue={setHue} />
<ImageArea blur={blur} setBlur={setBlur} contrast={contrast} gray={gray} brightness={brightness} saturation={saturation} sepia={sepia} hue={hue} />
</Container>
<BottomBar />
</Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

const Container = styled.div`
display: flex;
`

export default App;
