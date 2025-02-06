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
  overflow: hidden;
  /* border: 2px solid blue; */
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 20px;
  list-style: none;
`;
const CntPreviewLi = styled.li`
  border: 1px solid #cccccc;
  border-radius: 15px;
  overflow: hidden;
`;

function Section3({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.95]);
  const sectionRef = useRef(null);

  return (
    <Sec ref={sectionRef} id="section3">
      <Wrapper>
        <Cnt style={{ scale }}>
          <CntHeader>
            <a
              href="https://carrot-market-app.vercel.app/enter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CntTitleBox>
                <CntTitle>NextJS</CntTitle>
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
                <CntTitle>Carrot Market App</CntTitle>
              </CntTitleBox>
            </a>
            <a
              href="https://carrot-market-app.vercel.app/enter"
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
            "당근 마켓" 앱을 클론 코딩한 풀스택 웹 어플리케이션 프로젝트입니다.
            <br />
            토큰 기반 인증 시스템과 이메일 발송 기능을 적용하여 회원가입과
            로그인 기능을 제공하고
            <br />
            서버리스 데이터베이스인 Supabase를 연동하여 백엔드 로직을 구축하고,
            게시물 작성, 댓글 작성, 좋아요 기능을 구현했습니다.
            <br />
            이를 통해 실제 서비스에서와 비슷한 환경을 구성하고, 사용자 간의
            상호작용이 가능한 커뮤니티 기능을 경험할 수 있습니다.
          </CntExplain>
          <CntTechBox>
            <CntTechUl>
              <CntTechLi>Timeline</CntTechLi>
              <CntTechLi>2024 - 2025</CntTechLi>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi>Front</CntTechLi>
              <CntTechLi>
                NextJS, React19, Typescript, Tailwind CSS, Nodemailer, Vercel
              </CntTechLi>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi>Back</CntTechLi>
              <CntTechLi>Prisma, PlanetScale, Supabase</CntTechLi>
            </CntTechUl>
            <CntTechUl>
              <CntTechLi style={{ color: "rgb(173, 127, 57)" }}>
                Source Code
              </CntTechLi>
              <a
                href="https://github.com/jliliflora/carrot-market-app"
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
                href="https://carrot-market-app.vercel.app/enter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  src="/videos/carrot-001.mov"
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
                href="https://carrot-market-app.vercel.app/enter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  src="/videos/carrot-002.mov"
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
            <CntPreviewLi>3</CntPreviewLi>
          </CntPreview>
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default Section3;
