import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  gap: 40vw;
  color: rgb(150, 150, 150);
  font-size: 0.9rem;
  z-index: 99999;
  /* background-color: #eb8e8e; */
  /* border: 1px solid black; */
`;
const Sec = styled.div`
  margin: 5vh 0 0 0;
  display: flex;
  justify-content: space-between;
  gap: 5vw;
  white-space: nowrap;
  /* border: 1px solid black; */
`;
const LeftLi = styled.li`
  position: relative;
  padding-right: 1em;
  /* border: 1px solid black; */
`;
const RightLi = styled.li`
  position: relative;
  padding-left: 1.1em;
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

function Navigation() {
  return (
    <Nav variants={navVariants} initial="start" animate="end">
      <Sec>
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
      <Sec>
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
          <LeftLi style={{ paddingRight: 0 }}>Email...</LeftLi>
        </ul>
      </Sec>
    </Nav>
  );
}

export default Navigation;
