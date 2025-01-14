import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import ToggleEmailBox from "./main/ToggleEmailBox";

interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

const Sec = styled(motion.section)`
  overflow: hidden;
  position: sticky;
  top: 0px;
  height: 100vh;
  /* background-color: rgb(184, 44, 90); */
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

  /* 자식 요소가 Cnt를 기준으로 위치 잡도록 설정 */
  position: relative;
`;
const CntBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  /* border: 1px solid blue; */
`;
const CntTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #cacaca;
`;
const CntIntro = styled.p`
  margin: 3.5rem 0;
  font-size: 1.85rem;
  text-align: center;
  /* border: 1px solid red; */
`;
const Svg = styled.svg`
  display: block;
  margin: 0 auto;
  width: 85px;
  height: 85px;
  cursor: pointer;
  transition: transform 0.3s ease; /* 회전 애니메이션 */
  path {
    stroke: rgb(41, 41, 41);
    stroke-width: 1;
  }
  &:hover {
    transform: rotate(15deg); /* 마우스 호버 시 30도 회전 */
  }

  /* border: 1px solid black; */
`;
const ImgSec = styled.div<{
  top: string;
  bottom: string;
  left: string;
  right: string;
  num1: string;
  num2: string;
}>`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 375px;
  height: 180px;
  /* border: 1px black solid; */
  transition: transform 0.3s ease; /* 회전 애니메이션 */
  transform: rotate(${(props) => props.num1});
  &:hover {
    transform: rotate(${(props) => props.num2}) scale(1.07); /* 마우스 호버 시 30도 회전 */
  }
`;
const Footer = styled.ul`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  /* width: 500px;
  height: 50px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  list-style: none;
`;
const FooterItem = styled.li`
  position: relative;
  cursor: pointer;
  &:hover {
    color: #cacaca;
  }
  &:hover svg path {
    fill: #cacaca;
  }
  &:nth-child(3) {
    pointer-events: none;
  }
`;
const ArrowSvg = styled.svg`
  position: absolute;
  bottom: 0;
  right: 10;
  path {
    fill: #000;
  }
`;

//toggle
const ToggleItem = styled(motion.div)`
  width: auto;
  perspective: 2000px;
`;
const ToggleSub = styled(motion.div)`
  position: absolute;
  top: -140px;
  left: -100px;
  width: 270px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 20px;
  transform-origin: 50% -30px;
  box-shadow: rgba(0, 0, 0, 0.157) 0px 0.602187px 3.32481px -1.08333px,
    rgba(0, 0, 0, 0.145) 0px 2.28853px 5.03477px -2.16667px,
    rgba(0, 0, 0, 0.086) 0px 10px 22px -3.25px;
`;
const toggleAnimate = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 25 },
};

function About({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const sectionRef = useRef(null);

  //navhandler
  const handleScroll = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  //emailToggle
  const [isClicked, setIsClicked] = useState(false);
  const toggleClickEmail = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Sec ref={sectionRef} id="about">
      <Wrapper>
        <Cnt style={{ scale }}>
          <CntBox>
            <CntTitle>ABOUT ME</CntTitle>
            <CntIntro>
              ex- 7+ years of experience in product and&nbsp;service design. I
              worked in both big corporations and small startups, always
              striving to turn complex things into intuitive and thoughtful
              ones. In my spare time, I'm into collecting sneakers, watching F1
              &amp; playing tennis. Let's talk!
            </CntIntro>
            <Svg
              onClick={() => handleScroll("main")}
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <motion.path d="M40.932.932v80M60.931 6.29l-40 69.283m54.642-54.641-69.282 40m74.641-20h-80m74.641 20-69.282-40m54.64 54.641-40-69.282" />
            </Svg>
          </CntBox>
          <ImgSec
            top="23%"
            bottom=""
            left="-10%"
            right=""
            num1="-10deg"
            num2="-5deg"
          >
            <img
              src="/img/IMG_1155.JPG"
              alt="Portrait of SeungYeon"
              style={{
                width: "100%", // 부모 요소의 너비에 따라 이미지 크기 조정
                maxWidth: "375px", // 최대 크기 제한
                objectFit: "cover", // 비율 유지
                pointerEvents: "none",
              }}
              draggable="false"
            />
          </ImgSec>
          <ImgSec
            top=""
            bottom="30%"
            left="-10%"
            right=""
            num1="10deg"
            num2="5deg"
          >
            <img
              src="/img/IMG_1155.JPG"
              alt="Portrait of SeungYeon"
              style={{
                width: "375px",
                objectFit: "cover", // 비율 유지
                pointerEvents: "none",
              }}
              draggable="false"
            />
          </ImgSec>
          <ImgSec
            top="23%"
            bottom=""
            left=""
            right="-10%"
            num1="10deg"
            num2="5deg"
          >
            <img
              src="/img/IMG_3244.JPG"
              alt="Portrait of SeungYeon"
              style={{
                width: "375px",
                objectFit: "cover", // 비율 유지
                pointerEvents: "none",
              }}
              draggable="false"
            />
          </ImgSec>
          <ImgSec
            top=""
            bottom="30%"
            left=""
            right="-10%"
            num1="-10deg"
            num2="-5deg"
          >
            <img
              src="/img/IMG_3244.JPG"
              alt="Portrait of SeungYeon"
              style={{
                width: "375px",
                objectFit: "cover", // 비율 유지
                pointerEvents: "none",
              }}
              draggable="false"
            />
          </ImgSec>
          <Footer>
            <div>
              <ToggleItem onClick={toggleClickEmail}>
                <FooterItem style={{ paddingRight: 0 }}>Email me...</FooterItem>
                <AnimatePresence>
                  {isClicked && (
                    <ToggleSub
                      initial="exit"
                      animate="enter"
                      exit="exit"
                      variants={toggleAnimate}
                      transition={{ duration: 0.2 }}
                    >
                      <ToggleEmailBox />
                    </ToggleSub>
                  )}
                </AnimatePresence>
              </ToggleItem>
            </div>
            <FooterItem>
              <a
                href="https://github.com/jliliflora"
                style={{ cursor: "pointer" }}
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
                <ArrowSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </ArrowSvg>
              </a>
            </FooterItem>
            <FooterItem>© 2024</FooterItem>
          </Footer>
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default About;
