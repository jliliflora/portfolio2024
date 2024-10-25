import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

//dropbox
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
  font-family: "neue_montrealregular";
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

function ToggleEmailBox() {
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
  return (
    <div>
      <ToggleSubBox>
        <ToggleSubCnt style={{ padding: "0.2rem 0rem 1rem 0.5rem" }}>
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
  );
}

export default ToggleEmailBox;
