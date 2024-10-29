import { motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

const Sec = styled(motion.section)`
  overflow: hidden;
  position: sticky;
  top: 0px;
  height: 150vh;
  background-color: rgb(32, 50, 103);
`;
const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 0.3px solid #cacaca;
  /* background-color: rgb(31, 71, 193); */
  // padding-bottom: 10vh;
`;
const Cnt = styled(motion.div)`
  position: absolute;
  bottom: 0;
  max-width: 1248px;
  width: 100%; /* 부모의 너비를 모두 차지하도록 변경 */
  height: 100vh;
  border-top: 0.3px solid #cacaca;
  border: 2px solid #9e2222;
`;

function Section3({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.95]);
  const sectionRef = useRef(null);

  return (
    <Sec ref={sectionRef} id="section3">
      <Wrapper>
        <Cnt style={{ scale }}>
          {/* <motion.p style={{ scale }}>Scroll Perspective</motion.p> */}
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default Section3;
