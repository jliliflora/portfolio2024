import { motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

const Sec = styled.section`
  overflow: hidden;
  position: sticky;
  top: 0px;
  height: 150vh;
  background-color: rgb(17, 75, 53);
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
  /* background-color: #ffffff; */
  /* background-color: rgb(17, 212, 137); */
  /* padding-bottom: 10vh; */
`;
const Cnt = styled(motion.div)`
  position: absolute;
  bottom: 0;
  max-width: 1248px;
  width: 100%;
  height: 100vh;
  border-top: 0.3px solid #cacaca;
  border: 2px solid #9e2222;
`;
const CntHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* gap: 44vw; */
  margin: 12vh 0 23px 0;
  /* border: 1px solid black; */
`;
const CntTitleBox = styled.div`
  /* border: 1px solid orange; */
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
  margin-left: 20px;
  margin-bottom: 40px;
  font-size: 0.9rem;
  /* border: 1px solid black; */
`;
const CntTechBox = styled.div`
  display: flex;
  gap: 4vw;
  margin-left: 20px;
  /* border: 2px solid red; */
`;
const CntTechUl = styled.ul`
  /* border: 1px solid orange; */
`;
const CntTechLi = styled.li`
  /* border: 1px solid blue; */
  font-size: 0.95rem;
  position: relative;

  &:first-child {
    color: #888;
    margin-bottom: 7px;
  }
`;
const CntTechLiHover = styled.li`
  /* border: 1px solid blue; */
  font-size: 0.95rem;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #888;
    svg path {
      fill: #888;
      transition: fill 0s ease;
    }
  }
`;
const CntPreview = styled.div`
  height: 100%;
  margin: 40px 20px 0 20px;
  border: 2px solid blue;
`;

function Section2({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  const sectionRef = useRef(null);

  return (
    <Sec ref={sectionRef} id="section2">
      <Wrapper>
        <Cnt style={{ scale }}>
          <CntHeader>
            <div>
              <CntTitleBox>
                <CntTitle>SECTION2 React</CntTitle>
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
            TMDB API를 사용해서 제작한 영화 차트 순위 웹사이트입니다. <br />
            최신 영화의 성적을 실시간으로 확인할 수 있으며, 이를 통해 최신 영화
            트렌드를 파악할 수 있습니다. 인기상영작, 개봉예정작, 현재상영작
            3가지 카테고리로 나누어 각각의 차트를 한눈에 확인이 가능합니다.
            <br />
          </CntExplain>
          <CntTechBox>
            <CntTechUl>
              <CntTechLi>Timeline</CntTechLi>
              <CntTechLi>2024</CntTechLi>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi>Tech</CntTechLi>
              <CntTechLi>React JS, Typescript, Framer-motion</CntTechLi>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi>API</CntTechLi>
              <CntTechLiHover>
                TMDB API
                <ArrowSvg
                  style={{ bottom: "0", right: "-18px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    style={{ transition: "fill 0s ease" }}
                    d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                  />
                </ArrowSvg>
              </CntTechLiHover>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi style={{ color: "rgb(173, 127, 57)" }}>
                Source Code
              </CntTechLi>
              <CntTechLiHover>
                Github
                <ArrowSvg
                  style={{ bottom: "0", right: "25px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    style={{ transition: "fill 0s ease" }}
                    d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                  />
                </ArrowSvg>
              </CntTechLiHover>
            </CntTechUl>
          </CntTechBox>
          <CntPreview></CntPreview>
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
