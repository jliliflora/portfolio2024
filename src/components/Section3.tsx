import { motion, MotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

const Sec = styled(motion.section)`
  overflow: hidden;
  position: sticky;
  top: 0px;
  height: 100vh;
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
  box-sizing: border-box; /* padding과 border가 포함된 박스 크기 계산 */
  background-color: rgb(31, 71, 193);
  // padding-bottom: 10vh;
`;
const Cnt = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* 부모의 너비를 모두 차지하도록 변경 */
  height: 100vh;
  background-color: #fff;
`;

function Section3({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <Sec>
      <Wrapper>
        <Cnt style={{ scale }}>
          <motion.p style={{ scale }}>Scroll Perspective</motion.p>
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default Section3;
