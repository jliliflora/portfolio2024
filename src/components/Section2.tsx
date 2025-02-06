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
  background-color: #fff;
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
  /* border: 2px solid #9e2222; */
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
const CntPreview = styled.ul`
  height: 100%;
  margin: 40px 20px 0 20px;
  /* border: 2px solid blue; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
`;
const CntPreviewLi = styled.li`
  /* border: 2px solid red; */
  border-radius: 15px;
  overflow: hidden;
`;

function Section2({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 0.9]);
  const sectionRef = useRef(null);

  return (
    <Sec ref={sectionRef} id="section2">
      <Wrapper>
        <Cnt style={{ scale }}>
          <CntHeader>
            <a
              href="https://crypto-tracker-eight-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                <CntTitle>Crypto Traker WebSite</CntTitle>
              </CntTitleBox>
            </a>
            <a
              href="https://crypto-tracker-eight-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </a>
          </CntHeader>
          <CntExplain>
            Crypto Tracker Website는 다양한 암호화폐들의 가격 변화 추이를 추적할
            수 있는 웹 애플리케이션입니다. <br />
            이 프로젝트는 CoinPaprika API를 사용하여 다양한 암호화폐의 가격을
            가져오며, <br />
            특정 암호화폐의 가격을 1시간 전, 6시간 전, 1일 전, 7일 전 등 다양한
            시점에서 확인할 수 있습니다. <br />
            간편하고 직관적인 인터페이스와 차트를 통해 암호화폐 시장의 변동성을
            쉽게 파악해보세요!
          </CntExplain>
          <CntTechBox>
            <CntTechUl>
              <CntTechLi>Timeline</CntTechLi>
              <CntTechLi>2024</CntTechLi>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi>Tech</CntTechLi>
              <CntTechLi>React JS, Typescript, Apexchart, Vercel</CntTechLi>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi>API</CntTechLi>
              <a
                href="https://api.coinpaprika.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CntTechLiHover>
                  Coinpaprika API
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
              </a>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi style={{ color: "rgb(173, 127, 57)" }}>
                Source Code
              </CntTechLi>
              <a
                href="https://github.com/jliliflora/react-crypto-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
            </CntTechUl>
          </CntTechBox>
          <CntPreview>
            <CntPreviewLi>
              <a
                href="https://crypto-tracker-eight-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  src="/videos/cryptotraker-001.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%" }}
                >
                  Your browser does not support the video tag.
                </video>
              </a>
            </CntPreviewLi>
            <CntPreviewLi>
              <a
                href="https://crypto-tracker-eight-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  src="/videos/cryptotraker-002.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%" }}
                >
                  Your browser does not support the video tag.
                </video>
              </a>
            </CntPreviewLi>
            <CntPreviewLi>
              <a
                href="https://crypto-tracker-eight-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  src="/videos/cryptotraker-003.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%" }}
                >
                  Your browser does not support the video tag.
                </video>
              </a>
            </CntPreviewLi>
          </CntPreview>
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default Section2;
