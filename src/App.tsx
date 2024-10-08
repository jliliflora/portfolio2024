import { motion } from "framer-motion";
import styled from "styled-components";
import SectionBg from "./components/SectionBg";
import OrbitAni from "./components/OrbitAni";
import MainTitle from "./components/MainTitle";

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
  font-size: 31px;
  text-align: center;
  color: #252525;
  // border: 1px solid black;
`;

const TitleHey = styled(motion.div)`
  color: rgba(20, 20, 26, 0.362);
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
      <MainTitle />
    </Wrapper>
  );
}

export default App;
