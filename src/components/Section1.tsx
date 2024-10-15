import { motion, MotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const Sec = styled.section`
  overflow: hidden;
  position: sticky;
  top: 0px;
  height: 150vh;
  // padding-bottom: 100vh; /* 추가 스크롤 공간을 줌 */
  background-color: rgb(117, 107, 33);
`;
const Content = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 3.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  /* padding-bottom: 10vh; */
  border-top: 1px solid black;
  box-sizing: border-box; /* padding과 border가 포함된 박스 크기 계산 */
  background-color: rgb(212, 189, 17);
`;
interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

function Section1({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 0.6]);
  return (
    <Sec>
      <Content>
        <motion.p style={{ scale }}>Scroll Perspective</motion.p>
      </Content>
    </Sec>
  );
}

export default Section1;
