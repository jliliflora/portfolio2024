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
  max-width: 1248px;
  width: 100%;
  /*width: 73vw; */
  height: 100vh;
  border-top: 0.3px solid #cacaca;
  border: 2px solid #9e2222;
`;
const CntHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* gap: 44vw; */
  margin: 13vh 0 2vh 0;
  border: 1px solid black;
`;
const CntTitleBox = styled.div`
  border: 1px solid orange;
  display: flex;
  gap: 10px;
  transition: color 0.4s ease, stroke 0.4s ease;
  margin-left: 20px;
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
const WebSiteBtn = styled.button`
  position: relative;
  border: none;
  padding: 7px 23px 7px 11px;
  font-size: 14px;
  margin: 0.2rem 20px 0.2rem 0.2rem;
  cursor: pointer;
  border-radius: 20px;
  /* font-family: "neue_montreallight"; */
  /* background-color: #202020; */
  transition: background-color 0.4s ease, color 0.4s ease;

  &:hover {
    background-color: #202020;
    color: #fff;
    transition: background-color 0.4s ease, color 0.4s ease;
    svg path {
      fill: #fff;
      transition: fill 0.4s ease;
    }
  }
`;
const ArrowSvg = styled.svg`
  position: absolute;
  bottom: 6px;
  right: 6px;
  path {
    fill: #202020;
    transition: fill 0.4s ease;
  }
`;

const CntExplain = styled.div`
  width: 700px;
  margin-bottom: 3vh;
  font-size: 0.8rem;
  /* border: 1px solid black; */
`;
const CntTechBox = styled.div`
  /* border: 1px solid black; */
`;
const CntTechUl = styled.ul``;
const CntTechLi = styled.li``;

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
            <div>
              <WebSiteBtn>
                WebSite
                <ArrowSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </ArrowSvg>
              </WebSiteBtn>
            </div>
          </CntHeader>
          <CntExplain>
            국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이
            공포한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을
            받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을
            때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
          </CntExplain>
          <CntTechBox>
            <CntTechUl>
              <CntTechLi>Tech</CntTechLi>
              <CntTechLi>React JS, Typescript, Framer-motion</CntTechLi>
            </CntTechUl>
          </CntTechBox>
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default Section1;
