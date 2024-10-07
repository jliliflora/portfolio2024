import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const TitleBox = styled(motion.div)`
  position: absolute;
  top: 49%; /* 부모 요소의 세로 중앙 */
  left: 50%; /* 부모 요소의 가로 중앙 */
  transform: translate(-50%, -50%); /* 요소 크기의 절반만큼 이동 */
  font-size: 31px;
  text-align: center;
  color: #2e2e2e;
  // border: 1px solid black;
`;

const TitleHey = styled(motion.div)`
  color: rgba(20, 20, 26, 0.362);
`;

const wordAnimation = {
  hidden: {},
  visible: {},
};

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: 3,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.6],
    },
  },
};

function MainTitle() {
  const texts = [
    "Hey, I'm SeungYeon",
    "FrontEnd Developer, passionate about",
    "creating beautiful digital experiences.",
    "I make scrolling worth it!",
  ]; // 텍스트 배열

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  return (
    <TitleBox>
      {texts.map((text, lineIndex) => (
        <motion.div
          ref={ref}
          key={lineIndex}
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          transition={{
            duration: 0.6,
            delayChildren: lineIndex * 0.4, // 줄 별로 딜레이를 줘서 순차적으로 나타나게 함
            staggerChildren: 0.05,
          }}
        >
          {text.split("").map((character, charIndex) => (
            <motion.span
              key={charIndex}
              variants={characterAnimation}
              aria-hidden="true"
            >
              {character}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </TitleBox>
  );
}

export default MainTitle;
