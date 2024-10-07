import { motion } from "framer-motion";
import styled from "styled-components";

const TitleHey = styled(motion.div)`
  color: rgba(20, 20, 26, 0.362);
`;

const TitleText = styled(motion.div)`
  /* border: 1px solid red; */
`;
const TitlePic = styled(motion.div)`
  width: 95px;
  /* height: 35px; */
  img {
    width: 100%;
    display: block;
  }
`;

function MainTitleEx() {
  return (
    <>
      <TitleText>Hey, I'm</TitleText>
      <TitlePic>
        <img src="/img/main006.png" />
      </TitlePic>
      <TitleText>SeungYeon</TitleText>
      <TitleHey>Hey, I'm SeungYeon</TitleHey>
      FrontEnd Developer, passionate about
      <br />
      creating beautiful digital experiences.
      <br />I make scrolling worth it!
    </>
  );
}

export default MainTitleEx;
