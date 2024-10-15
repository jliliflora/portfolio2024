import { motion } from "framer-motion";
import styled from "styled-components";
import SectionBg from "./components/main/SectionBg";
import OrbitAni from "./components/main/OrbitAni";
import MainTitle from "./components/main/MainTitle";
import Navigation from "./components/main/Navigation";
import ScrollBtn from "./components/main/ScrollBtn";

const Wrapper = styled(motion.main)`
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
      <ScrollBtn />
    </Wrapper>
  );
}

export default App;
