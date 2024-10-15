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
  // padding-bottom: 100vh; /* 추가 스크롤 공간을 줌 */
  /* background-color: rgb(117, 107, 33); */
  /* border-top: 0.3px solid #cacaca; */
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
  /* background-color: rgb(212, 189, 17); */
  // padding-bottom: 10vh;
`;
const Cnt = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 1200px; /* 부모의 너비를 모두 차지하도록 변경 */
  height: 100vh;
  border-top: 0.3px solid #cacaca;
  border: 2px solid #9e2222;
`;
const CntHeader = styled.div`
  border: 1px solid rebeccapurple;
  display: flex;
  justify-content: space-between;
`;
const CntTitleBox = styled.div`
  border: 1px solid black;
  display: flex;
  gap: 10px;
  transition: color 0.4s ease, stroke 0.4s ease;
  &:hover {
    color: #888;
    svg {
      transform: rotate(45deg); /* hover 시 회전 */
      transition: transform 0.4s ease;
      path {
        stroke: #888;
        transition: stroke 0.4s ease;
      }
    }
  }
`;
const CntTitle = styled.h1`
  font-size: 1.8rem;
`;
const CntTitleSvg = styled.svg`
  transition: transform 0.4s ease;
`;

function Section1({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <Sec>
      <Wrapper>
        <Cnt style={{ scale }}>
          <CntHeader>
            <div>
              <CntTitleBox>
                <CntTitle>React</CntTitle>
                <CntTitleSvg
                  width="32px"
                  height="32px"
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
                </CntTitleSvg>
                <CntTitle>Movie Rank WebSite</CntTitle>
              </CntTitleBox>
            </div>
            <div>button</div>
          </CntHeader>
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default Section1;
