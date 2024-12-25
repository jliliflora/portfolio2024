import { useState } from "react";
import styled from "styled-components";

const ToggleCntBox = styled.div`
  margin-bottom: 5px;
  text-align: left;
`;
const ToggleCnt = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  color: #2e2e2e;
  padding: 1rem 0rem;
  font-size: 0.95rem;
  font-family: "neue_montrealregular";
  cursor: pointer;
  /* border: 1px solid black; */
  &:hover {
    color: #888;
    svg path {
      fill: #888;
    }
  }
`;
const ToggleEmailCnt = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  color: #2e2e2e;
  background-color: #eee;
  border-radius: 22px;
  font-size: 1rem;
  font-family: "neue_montrealregular";
  cursor: default;
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
const ArrowSvg = styled.svg`
  /* border: 1px solid red; */
  position: absolute;
  bottom: 1rem;
  /* right: 10; */
  path {
    fill: #2e2e2e;
  }
`;

function ToggleMenu() {
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

  //navhandler
  const handleScroll = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const sectionHeight = (150 * window.innerHeight) / 100; // 150vh

      // 섹션의 인덱스에 따라 스크롤 위치 계산
      let index = 0;
      switch (sectionId) {
        case "section1":
          index = 0;
          break;
        case "section2":
          index = 1;
          break;
        case "section3":
          index = 2;
          break;
        default:
          index = 0;
      }

      const yOffset = index * sectionHeight + window.innerHeight; // +100vh
      // console.log(yOffset);
      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <ToggleCntBox>
        <ToggleCnt
          onClick={() => handleScroll("section1")}
          style={{ paddingTop: "0.5rem" }}
        >
          <span style={{ cursor: "pointer" }}>Movie Rank WebSite</span>
        </ToggleCnt>
        <ToggleCnt onClick={() => handleScroll("section2")}>
          <span style={{ cursor: "pointer" }}>Crypto Traker WebSite</span>
        </ToggleCnt>
        <ToggleCnt onClick={() => handleScroll("section3")}>
          <span style={{ cursor: "pointer" }}>Carrot Market App</span>
        </ToggleCnt>
        <ToggleCnt
          style={{
            borderTop: "0.3px solid #cacaca",
            padding: "1rem 0 0.3rem 0",
            color: "rgb(150, 150, 150)",
            fontSize: "0.9rem",
          }}
        >
          Email
        </ToggleCnt>
        <ToggleCnt style={{ padding: "0" }}>
          <ToggleEmailCnt>
            <span style={{ padding: "0", margin: "8px 0 0 12px" }}>
              syon704@gmail.com
            </span>
            <CopyButton onClick={handleCopy}>
              {copied ? "Copied!" : "Copy"}
            </CopyButton>
          </ToggleEmailCnt>
          <WriteButton>Write</WriteButton>
        </ToggleCnt>
        <ToggleCnt>
          <a href="https://github.com/jliliflora" target="_blank">
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
        </ToggleCnt>
        <ToggleCnt>
          <a href="https://www.instagram.com/j.liliflora/" target="_blank">
            Instargram
            <ArrowSvg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </ArrowSvg>
          </a>
        </ToggleCnt>
        <ToggleCnt style={{ paddingBottom: "0" }}>
          <a href="https://jliliflora.github.io/portfolio/" target="_blank">
            2022 Portfolio
            <ArrowSvg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              style={{ bottom: "0" }}
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </ArrowSvg>
          </a>
        </ToggleCnt>
      </ToggleCntBox>
    </div>
  );
}

export default ToggleMenu;
