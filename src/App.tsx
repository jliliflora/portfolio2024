import { motion } from "framer-motion";
import styled from "styled-components";
import SectionBg from "./components/SectionBg";
import OrbitAni from "./components/OrbitAni";
import MainTitle from "./components/MainTitle";
import Navigation from "./components/Navigation";
import SectionScroll from "./components/SectionScroll";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

function App() {
  return (
    <Wrapper>
      <Navigation />
      <SectionBg />
      <OrbitAni />
      <MainTitle />
      <SectionScroll />
    </Wrapper>
  );
}

export default App;
