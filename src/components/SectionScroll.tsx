import { delay, motion } from "framer-motion";
import styled from "styled-components";

const ScrollBox = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  font-size: 0.9rem;
  color: rgb(150, 150, 150);
  &:hover {
    color: #cacaca;
  }
  &:hover svg path {
    fill: #cacaca; /* SVG의 path 색상 변경 */
  }
  cursor: default;
  /* border: 1px solid black; */
`;

const Svg = styled.svg`
  position: absolute;
  bottom: 0.175rem;
  padding-top: 2px;
  path {
    fill: rgb(150, 150, 150);
  }
`;

const scrollVariants = {
  start: { opacity: 0, y: -25 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 2.25,
    },
  },
};

function SectionScroll() {
  return (
    <ScrollBox variants={scrollVariants} initial="start" animate="end">
      <div style={{ position: "relative" }}>
        SCROLL
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 32 32"
        >
          <path
            d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z"
            data-name="2-Arrow Down"
          />
        </Svg>
      </div>
    </ScrollBox>
  );
}

export default SectionScroll;
