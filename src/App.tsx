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
const Title = styled(motion.h1)`
  position: absolute;
  top: 50%; /* 부모 요소의 세로 중앙 */
  left: 50%; /* 부모 요소의 가로 중앙 */
  transform: translate(-50%, -50%); /* 요소 크기의 절반만큼 이동 */
  border: 1px solid black;
  font-size: 32px;
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <SectionBg />
      <OrbitAni />
      <Title>
        Hey, I'm SeungYeon
        <br />
        FrontEnd Developer, passionate about
        <br />
        creating beautiful digital experiences.
        <br />I make scrolling worth it!
      </Title>
    </Wrapper>
  );
}

export default App;
