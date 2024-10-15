import { motion, MotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const Sec = styled.section`
  overflow: hidden;
  position: sticky;
  top: 0px;
  height: 150vh;
  background-color: rgb(17, 75, 53);
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
  background-color: rgb(17, 212, 137);
`;

const b4Sec = styled(motion.section)`
  position: sticky;
  top: 0px;
  height: 100vh;
  background-color: rgb(17, 212, 20);
  font-size: 3.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding-bottom: 10vh;
`;
interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

function Section2({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 0.7]);
  return (
    <Sec>
      <Content>
        <motion.p style={{ scale }}>Scroll Perspective</motion.p>
      </Content>
    </Sec>
  );
}

export default Section2;
