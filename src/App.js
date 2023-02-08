import { useState } from "react";
import styled from "styled-components";
import FilterArea from "./FilterArea";
import ImageArea from "./ImageArea";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import upload from "./upload-icon.svg";

function App() {
  const [blur, setBlur] = useState('0')

  return (
<Wrapper>
<TopBar />
<Container>
<FilterArea blur={blur} setBlur={setBlur} />
<ImageArea blur={blur} />
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

