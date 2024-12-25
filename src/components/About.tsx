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
  border: 1px solid blue;
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
  width: 250px;
  height: 300px;
  border: 1px black solid;
  transition: transform 0.3s ease; /* 회전 애니메이션 */
  transform: rotate(${(props) => props.num1});
  &:hover {
    transform: rotate(${(props) => props.num2}) scale(1.07); /* 마우스 호버 시 30도 회전 */
  }
`;

function About({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const sectionRef = useRef(null);

  return (
    <Sec ref={sectionRef} id="section4">
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
            top="17%"
            bottom=""
            left="5%"
            right=""
            num1="10deg"
            num2="5deg"
          >
            1
          </ImgSec>
          <ImgSec
            top=""
            bottom="17%"
            left="5%"
            right=""
            num1="-10deg"
            num2="-5deg"
          >
            2
          </ImgSec>
          <ImgSec
            top="17%"
            bottom=""
            left=""
            right="5%"
            num1="-10deg"
            num2="-5deg"
          >
            3
          </ImgSec>
          <ImgSec
            top=""
            bottom="17%"
            left=""
            right="5%"
            num1="10deg"
            num2="5deg"
          >
            4
          </ImgSec>
        </Cnt>
      </Wrapper>
    </Sec>
  );
}

export default About;
