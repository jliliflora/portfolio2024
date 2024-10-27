import { useState } from "react";
import styled from "styled-components";

const ToggleCntBox = styled.div`
  margin-bottom: 5px;
  text-align: left;
`;
const ToggleCnt = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2e2e2e;
  padding: 1rem 0rem;
  font-size: 1rem;
  font-family: "neue_montrealregular";
  /* border: 1px solid black; */
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
      // 각 섹션의 높이를 상수로 정의
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
          style={{ paddingTop: "0.5rem", cursor: "pointer" }}
        >
          <span style={{}}>sec1</span>
        </ToggleCnt>
        <ToggleCnt onClick={() => handleScroll("section2")}>sec2</ToggleCnt>
        <ToggleCnt onClick={() => handleScroll("section3")}>sec3</ToggleCnt>
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
        <ToggleCnt>Github</ToggleCnt>
        <ToggleCnt>Instargram</ToggleCnt>
        <ToggleCnt style={{ paddingBottom: "0" }}>2022 Portfolio</ToggleCnt>
      </ToggleCntBox>
    </div>
  );
}

export default ToggleMenu;
