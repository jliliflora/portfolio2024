import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import SectionBg from "./components/SectionBg";
import OrbitAni from "./components/OrbitAni";

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
      <SectionBg />
      <OrbitAni />
    </Wrapper>
  );
}

export default App;
