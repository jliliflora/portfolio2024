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
const TitleBox = styled(motion.div)`
  position: absolute;
  top: 49%; /* 부모 요소의 세로 중앙 */
  left: 50%; /* 부모 요소의 가로 중앙 */
  transform: translate(-50%, -50%); /* 요소 크기의 절반만큼 이동 */
  font-size: 32px;
  text-align: center;
  // border: 1px solid black;
`;

const TitleHey = styled(motion.div)`
  // border: 1px solid black;
  /* display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 16px;
  white-space: nowrap; */
  color: rgba(20, 20, 26, 0.362);
  font-size: 32px;
`;
const TitleText = styled(motion.div)`
  /* border: 1px solid red; */
`;
const TitlePic = styled(motion.div)`
  width: 95px;
  /* height: 35px; */
  img {
    width: 100%;
    display: block;
  }
`;

const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  border: 1px solid black;
`;

function App() {
  return (
    <Wrapper>
      <Nav>menu</Nav>
      <SectionBg />
      <OrbitAni />
      <TitleBox>
        <TitleHey>
          Hey, I'm SeungYeon
          {/* <TitleText>Hey, I'm</TitleText>
          <TitlePic>
            <img src="/img/main006.png" />
          </TitlePic>
          <TitleText>SeungYeon</TitleText> */}
        </TitleHey>
        FrontEnd Developer, passionate about
        <br />
        creating beautiful digital experiences.
        <br />I make scrolling worth it!
      </TitleBox>
    </Wrapper>
  );
}

export default App;
