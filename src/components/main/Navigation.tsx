import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ToggleMenu from "./ToggleMenu";
import ToggleEmailBox from "./ToggleEmailBox";

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
  font-size: 0.95rem;
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
  padding-left: 1.1em;
  cursor: pointer;
  &:hover {
    color: #cacaca;
  }
  /* border: 1px solid black; */
`;
const RightLi = styled.li`
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
  start: { opacity: 0, y: -30 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

//toggle
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
  display: ${(props) => (props.show ? "flex" : "none")};
  /* transform: translateY(${(props) => (props.show ? "0" : "25px")});
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.25s, transform 0.25s; */
  &:hover {
    color: #ff5c5c;
    border: 1px solid #ff5c5c;
  }

  width: auto;
  perspective: 2000px;
`;
const ToggleMenuBox = styled(motion.div)`
  cursor: default;
  position: absolute;
  top: 60px;
  left: -270px;
  width: 360px;
  padding: 15px 20px;
  background-color: #ffffff;
  border-radius: 20px;
  transform-origin: 50% -30px;
  box-shadow: rgba(0, 0, 0, 0.157) 0px 0.602187px 3.32481px -1.08333px,
    rgba(0, 0, 0, 0.145) 0px 2.28853px 5.03477px -2.16667px,
    rgba(0, 0, 0, 0.086) 0px 10px 22px -3.25px;
`;

function Navigation() {
  //emailToggle
  const [isClicked, setIsClicked] = useState(false);
  const toggleClickEmail = () => {
    setIsClicked(!isClicked);
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

  //navhandler
  const handleScroll = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Nav variants={navVariants} initial="start" animate="end">
      <Sec show={showButton}>
        <ul>
          <li>FrontEnd Developer</li>
          <li>Now in Seoul</li>
        </ul>
        <ul>
          <LeftLi onClick={() => handleScroll("section1")}>
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
          </LeftLi>
          <LeftLi onClick={() => handleScroll("about")}>
            <StarSvg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <path d="M40.932.932v80M60.931 6.29l-40 69.283m54.642-54.641-69.282 40m74.641-20h-80m74.641 20-69.282-40m54.64 54.641-40-69.282" />
            </StarSvg>
            About
          </LeftLi>
        </ul>
      </Sec>
      <Sec show={showButton}>
        <ul style={{ textAlign: "right" }}>
          <RightLi>
            <a
              href="https://github.com/jliliflora"
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
          </RightLi>
          <div>
            <ToggleItem onClick={toggleClickEmail}>
              <RightLi style={{ paddingRight: 0 }}>Email...</RightLi>
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
        </ul>
        <ul style={{ textAlign: "right" }}>
          <RightLi>
            <a
              href="https://www.instagram.com/j.liliflora/"
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
          </RightLi>
          <RightLi>
            <a
              href="https://jliliflora.github.io/portfolio/"
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
          </RightLi>
        </ul>
      </Sec>
      <MenuBtn show={!showButton} onClick={toggleClickMenu}>
        Menu
        <AnimatePresence>
          {isMenuClicked && (
            <ToggleMenuBox
              initial="exit"
              animate="enter"
              exit="exit"
              variants={toggleAnimate}
              transition={{ duration: 0.2 }}
            >
              <ToggleMenu />
            </ToggleMenuBox>
          )}
        </AnimatePresence>
      </MenuBtn>
    </Nav>
  );
}

export default Navigation;
