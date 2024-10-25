import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ToggleMenu from "./ToggleMenu";

const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  max-width: 1248px;
  width: 100%;
  /* width: 75vw; */
  height: 10vh;
  display: flex;
  justify-content: space-between;
  /* gap: 40vw; */
  color: rgb(150, 150, 150);
  font-size: 0.9rem;
  z-index: 99999;
  /* border: 1px solid black; */
`;
const Sec = styled.div<{ show: boolean }>`
  margin: 5vh 20px 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 5vw;
  white-space: nowrap;
  /* border: 1px solid black; */
  display: ${(props) => (props.show ? "flex" : "none")};
`;
const LeftLi = styled.li`
  position: relative;
  padding-right: 1em;
  cursor: pointer;
  &:hover {
    color: #cacaca;
  }
  &:hover svg path {
    fill: #cacaca;
  }
  /* border: 1px solid black; */
`;
const RightLi = styled.li`
  position: relative;
  padding-left: 1.1em;
  &:hover {
    color: #cacaca;
  }
  /* border: 1px solid black; */
`;
const ArrowSvg = styled.svg`
  position: absolute;
  bottom: 0;
  right: 10;
  path {
    fill: rgb(150, 150, 150);
  }
`;
const StarSvg = styled.svg`
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 0.8em;
  height: 0.8em;
  path {
    stroke: #353535;
    stroke-width: 2;
  }
`;

const navVariants = {
  start: { opacity: 0, y: -25 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

//dropbox
const ToggleItem = styled(motion.div)`
  width: auto;
  perspective: 2000px;
`;
const ToggleSub = styled(motion.div)`
  position: absolute;
  top: 25px;
  left: -210px;
  width: 270px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 6px;
  transform-origin: 50% -30px;
  box-shadow: rgba(0, 0, 0, 0.157) 0px 0.602187px 3.32481px -1.08333px,
    rgba(0, 0, 0, 0.145) 0px 2.28853px 5.03477px -2.16667px,
    rgba(0, 0, 0, 0.086) 0px 10px 22px -3.25px;
`;
const SubMenuBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: 0 0;
  /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04); */
`;
const ToggleSubBox = styled.div`
  margin-bottom: 5px;
  text-align: left;
`;
const ToggleSubCnt = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2e2e2e;
  /* padding: 1em; */
  font-size: 1rem;
  /* border: 1px solid black; */
`;
const WriteButton = styled.button`
  background-color: #202020;
  color: #fff;
  border: none;
  padding: 7px 10px;
  font-size: 14px;
  margin: 0.2rem;
  cursor: pointer;
  border-radius: 20px;
  font-family: "neue_montreallight";
  border: 0.5px solid #202020;
  box-sizing: border-box;

  &:hover {
    background-color: #fff;
    color: #202020;
  }
`;
const CopyButton = styled.button`
  background-color: white;
  border: none;
  padding: 7px 10px;
  font-size: 14px;
  margin: 0.2rem;
  cursor: pointer;
  border-radius: 20px;
  font-family: "neue_montreallight";
  border: 0.5px solid #fff;
  box-sizing: border-box;

  &:hover {
    background-color: #202020;
    color: #ffffff;
  }
`;

const toggleSubAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.15,
    },
  },
};

//menu
const MenuBtn = styled.button<{ show: boolean }>`
  position: absolute;
  bottom: 0;
  right: 20px;
  width: 90px;
  height: 53px;
  border-radius: 30px;
  border: 1px solid #202020;
  background-color: #fff;
  padding: 16px 22.5px;
  /* font-family: "neue_montreallight"; */
  font-size: 17px;
  cursor: pointer;
  /* display: ${(props) => (props.show ? "flex" : "none")}; */
  transform: translateY(${(props) => (props.show ? "0" : "25px")});
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.25s, transform 0.25s;
  &:hover {
    color: #ff5c5c;
    border: 1px solid #ff5c5c;
  }

  width: auto;
  perspective: 2000px;
`;
const ToggleMenuBox = styled(motion.div)`
  position: absolute;
  top: 60px;
  left: -180px;
  width: 270px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 6px;
  transform-origin: 50% -30px;
  box-shadow: rgba(0, 0, 0, 0.157) 0px 0.602187px 3.32481px -1.08333px,
    rgba(0, 0, 0, 0.145) 0px 2.28853px 5.03477px -2.16667px,
    rgba(0, 0, 0, 0.086) 0px 10px 22px -3.25px;
`;

function Navigation() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClickEmail = () => {
    setIsClicked(!isClicked);
  };

  //copy button
  const [copied, setCopied] = useState(false);

  const textToCopy = "syon704@gmail.com"; // 복사할 텍스트

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 부모 요소로의 이벤트 전파 막기
    try {
      await navigator.clipboard.writeText(textToCopy); // 클립보드에 텍스트 복사
      setCopied(true); // 복사 성공 시 상태 업데이트
      setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  //menu
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.15) {
        // 스크롤이 15% 이상일 때
        setShowButton(false); // 버튼을 숨김
      } else {
        setShowButton(true); // 버튼을 다시 보임
      }
    });
  }, [scrollYProgress]);

  //menuToggle
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const toggleClickMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <Nav variants={navVariants} initial="start" animate="end">
      <Sec show={showButton}>
        <ul>
          <li>FrontEnd Developer</li>
          <li>Now in Seoul</li>
        </ul>
        <ul>
          <RightLi>
            <StarSvg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <path d="M40.932.932v80M60.931 6.29l-40 69.283m54.642-54.641-69.282 40m74.641-20h-80m74.641 20-69.282-40m54.64 54.641-40-69.282" />
            </StarSvg>
            Experience
          </RightLi>
          <RightLi>
            <StarSvg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <path d="M40.932.932v80M60.931 6.29l-40 69.283m54.642-54.641-69.282 40m74.641-20h-80m74.641 20-69.282-40m54.64 54.641-40-69.282" />
            </StarSvg>
            <a href="https://www.naver.com/">About</a>
          </RightLi>
        </ul>
      </Sec>
      <Sec show={showButton}>
        <ul style={{ textAlign: "right" }}>
          <LeftLi>
            <a
              href="https://www.naver.com/"
              style={{ cursor: "pointer" }}
              target="_blank"
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
          </LeftLi>
          <div>
            <ToggleItem onClick={toggleClickEmail}>
              <LeftLi style={{ paddingRight: 0 }}>Email...</LeftLi>
              <ToggleSub
                initial="exit"
                animate={isClicked ? "enter" : "exit"}
                variants={toggleSubAnimate}
              >
                <div>
                  <ToggleSubBox>
                    <ToggleSubCnt
                      style={{ padding: "0.2rem 0rem 1rem 0.5rem" }}
                    >
                      <span
                        style={{
                          fontSize: "1.3rem",
                          fontFamily: "neue_montrealmedium",
                          padding: "0",
                          marginTop: "7px",
                        }}
                      >
                        Email
                      </span>
                      <WriteButton>Write</WriteButton>
                    </ToggleSubCnt>
                    <ToggleSubCnt
                      style={{
                        backgroundColor: "#eeeeee",
                        borderRadius: "22px",
                      }}
                    >
                      <span style={{ padding: "0", margin: "8px 0 0 12px" }}>
                        syon704@gmail.com
                      </span>
                      <CopyButton onClick={handleCopy}>
                        {copied ? "Copied!" : "Copy"}
                      </CopyButton>
                      {/* {copied && <p>Text copied: {textToCopy}</p>}{" "} */}
                      {/* 복사 성공 시 텍스트 표시 */}
                    </ToggleSubCnt>
                  </ToggleSubBox>
                </div>
              </ToggleSub>
            </ToggleItem>
          </div>
        </ul>
        <ul style={{ textAlign: "right" }}>
          <LeftLi>
            <a
              href="https://www.naver.com/"
              style={{ cursor: "pointer" }}
              target="_blank"
            >
              Instagram
              <ArrowSvg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </ArrowSvg>
            </a>
          </LeftLi>
          <LeftLi>
            <a
              href="https://www.naver.com/"
              style={{ cursor: "pointer" }}
              target="_blank"
            >
              2022 Portfolio
              <ArrowSvg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </ArrowSvg>
            </a>
          </LeftLi>
        </ul>
      </Sec>
      <MenuBtn show={!showButton} onClick={toggleClickMenu}>
        Menu
        <ToggleMenuBox
          initial="exit"
          animate={isMenuClicked ? "enter" : "exit"}
          variants={toggleSubAnimate}
        >
          <ToggleMenu />
        </ToggleMenuBox>
      </MenuBtn>
    </Nav>
  );
}

export default Navigation;
