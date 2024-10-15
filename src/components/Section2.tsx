import { motion, MotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

const Sec = styled.section`
  overflow: hidden;
  position: sticky;
  top: 0px;
  height: 150vh;
  /* background-color: rgb(17, 75, 53); */
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
  background-color: #fff;
  /* background-color: rgb(17, 212, 137); */
  /* padding-bottom: 10vh; */
`;
const Cnt = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 1200px; /* 부모의 너비를 모두 차지하도록 변경 */
  height: 100vh;
  border-top: 0.3px solid #cacaca;
  border: 2px solid #9e2222;
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

function Section2({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  return (
    <Sec>
      <Wrapper>
        {/* <motion.p style={{ scale }}>Scroll Perspective</motion.p> */}
        <Cnt style={{ scale }}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893"
              stroke="#000000"
              stroke-width="0.7"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            />
          </svg>
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default Section2;
